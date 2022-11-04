import React from 'react'
import './Descriptions.css'
import {FaArrowDown} from "react-icons/fa"
const Descriptions = () => {
  return (
    <div className="section section_descriptions">
        <div className="card">
            <div className="description_card-icon">
                <FaArrowDown/>
                <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
    </div>
  )
}

export default Descriptions