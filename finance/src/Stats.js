import React, { useState, useEffect } from "react"
import './Stats.css'
import axios from 'axios';
import Chart from 'chart.js/auto';
import StatsRow from './StatsRow';
import { db } from "./firebase";

const Base_Url = "https://finnhub.io/api/v1/quote";
const Token = "ck32do1r01qp0k7688qgck32do1r01qp0k7688r0";

function Stats(){

    const [stockData, setstockData] = useState([])
    const [myStocks, setMyStocks ] = useState([])

    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {

            console.log(snapshot.docs);
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc) => {
                
                promises.push(getStockData(doc.data().ticker)
                .then(res => {
                  tempData.push({
                    id: doc.id,
                    data: doc.data(),
                    info: res.data
                   })
                })
            )})
            Promise.all(promises).then(()=>{
                console.log(tempData);
                setMyStocks(tempData);
            })

        })
    }

    const getStockData = (stock) => {

        return axios
            .get(`${Base_Url}?symbol=${stock}&token=${Token}`)
            .catch((error) => {
                console.error("Error", error.message);
            });

    }

    useEffect(()=>{

        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "META", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];
        getMyStocks();
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) =>{
                    tempStocksData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });

        Promise.all(promises).then(() => {
            setstockData(tempStocksData);
            
        })

    }, [])

    return (
        <div className = "stats">
            <div className = "stats__container">
                <div className = "stats__header">
                    <p>Stocks</p>
                </div>
                <div className = "stats__content">
                        <div className = "stats__rows">
                        {myStocks.map((stock) => 
                            <StatsRow
                                key = {stock.data.ticker}
                                name = {stock.data.ticker}
                                openPrice={stock.info.o}
                                volume = {stock.data.shares}
                                price={stock.info.c}
                            />
                        )}
                        </div>
                </div>
                <div className = "stats__header">
                    <p>Lists</p>
                </div>
                <div className = "stats__content">
                        <div className = "stats__rows">
                        {stockData.map((stock) => (
                            
                            <StatsRow
                                key = {stock.name}
                                name = {stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                        </div>
                </div>
            </div>
        </div>
    );

}

export default Stats;