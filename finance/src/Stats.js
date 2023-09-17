import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios';
import Chart from 'chart.js/auto';
import StatsRow from './StatsRow';

const Base_Url = "https://finnhub.io/api/v1/quote";
const Token = "ck32do1r01qp0k7688qgck32do1r01qp0k7688r0";

function Stats(){

    const [stockData, setstockData] = useState([])

    const getStockData = (stock) => {

        return axios
            .get(`${Base_Url}?symbol=${stock}&token=${Token}`)
            .catch((error) => {
                console.error("Error", error.message);
            });

    }

    useEffect(()=>{

        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];
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
                       
                        </div>
                </div>
                <div className = "stats__header">
                    <p>Lists</p>
                </div>
                <div className = "stats__content">
                        <div className = "stats__rows">
                        {stockData.map((stock) => (
                            
                            <StatsRow/>
                        ))}
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Stats