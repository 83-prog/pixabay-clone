import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

export const Navbar = () => {

const {fatchButton} = useContext(PixabayContext)

const buttonHandle = {
display: "flex",
justifyContent: "center",
gap: "10px",
marginBottom: "10px",
}

  return (
    <div style={buttonHandle} className='buttonHandle'>
    <button onClick={()=>fatchButton("nature")}> Nature </button>
    <button onClick={()=>fatchButton("science")}> Science </button>
    <button onClick={()=>fatchButton("education")}> Education </button>
    <button onClick={()=>fatchButton("feelings")}> Feelings </button>
    <button onClick={()=>fatchButton("health")}> Health </button>
    <button onClick={()=>fatchButton("food")}> Food </button>
    </div>
  )
}
