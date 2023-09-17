import React, { useState } from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLIne'
import Chip from './Chip'


function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);


  return (
    <div className="newsFeed">
        <div className="newsfeed__container">
          <div className="news__chartSection">
              <div className="newsfeed__portfolio">
                  <h1>$114,656</h1>
                  <p>+$44.63 (+0.04) Today</p>
              </div>
              <div className="newsfeed__chart">
                  <LineGraph />
                  <TimeLine />
              </div>
          </div>
          <div className="newsfeed__buying__section">
              <h2> Buying Power</h2>
              <h2>$4.12</h2>
          </div>
          <div className="newsfeed__Market__section">
              <div className="newsfeed__market__box">
                  <p>Markets Closed</p>
                  <h1>#Shell Hacks</h1>
              </div>
          </div>
          <div className="Newfeed__populars__section">
              <div className="newsfeed__popularlists__intro">
                  <h1>Popular lists</h1>
                  <p>Show more</p>
              </div>
              <div className="newsfeed__popularlists_badges">
                 {/* {popularTopics.map((topic) => (
                    <Chip 
                        label={topic}
                        image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                    />
                  ))} */}
              </div>
          </div>
        </div>

    </div>
  )
}

export default Newsfeed
