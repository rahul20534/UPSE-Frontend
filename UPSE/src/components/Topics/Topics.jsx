import React from 'react'
import './Topics.css';
import Topicsbutton from '../Topics-Button/TopicsButton.jsx';

const TopicsData = [
  {
    title: "Science & Tech",
    tags: ["GS2", "GS1", "Prelims"]
  },
  {
    title: "Geography",
    tags: ["GS2", "Prelims"]
  },
  {
    title: "Geopolitics",
    tags: ["GS2", "Prelims"]
  },
  {
    title: "History",
    tags: ["GS2", "Prelims"]
  },
  {
    title: "Others",
    tags: ["GS2", "Prelims"]
  }
]

const topics = () => {
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>Topics</h1>
        </div>
        <div className='topic'>
          {TopicsData.map((item, index1) => (
            <div key={index1} className='topic-item'>
              <div className='topics-data'>
                {item.tags.map((i, index2) => (
                  <Topicsbutton key={index2} value={i} />
                ))}
              </div>
              <div className='topics-title'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default topics
