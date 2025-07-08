import React from 'react'
import './Date.css'
//icon
import Calender from '../../assets/icons/calander.svg'
import RightArrow from '../../assets/icons/rightarrow.svg'
import LeftArrow from '../../assets/icons/leftarrow.svg'

const Date=()=> {
  return (
    <>
    <div className='date'>
        <div className='left'>
            <div className='calender'>
                <img src={Calender} alt="" />
            </div>

            <div className='datetime'>
                <div className='leftarrow'>
                    <img src={LeftArrow} alt="" />

                </div>
                <h1>19, Jun, 2025</h1>
                <div className='rightarrow'>
                    <img src={RightArrow} alt="" />

                </div>

            </div>

        </div>
        <div className='right'>
            <h1>Sunday</h1>

        </div>

    </div>
    </>
  )
}

export default Date
