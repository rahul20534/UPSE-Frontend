import React from 'react'
import './TopicsButton.css'

const topicsbutton=({value})=> {
  return (
    <>
    <div className='button'>
      <h1>{value}</h1>
    </div>
    </>
  )
}

export default topicsbutton
