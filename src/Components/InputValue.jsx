import React, { useContext } from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import PixabayContext from '../Context/PixabayContext'


export const InputValue = () => {
  
  const {setInputSearch} = useContext(PixabayContext)

    // position: absolute;
    // top: 0;
    // width: 100%;
    // height: 500px;
    // overflow: hidden;
    // display: flex;
    // align-items: center;
    // justify-content: center;

const InputContainer={
    position: "absolute",
    top: "0",
    width: "100%",
    height: "500px",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    left: "0",
}    


  return (
    <>
    <div style={InputContainer} className='InputContainer'>
      <div>
      <div style={{textAlign: "center", marginBottom: "20px"}}>
        <h1 style={{fontSize: "2em", color: "#fff", fontWeight: "700"}}> Stunning royalty-free images </h1>
      </div>
       <Navbar/>
       
   
      <div className='InputDiv'>
    <div className='SearchIcon'>
   <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <input onChange={(e)=>setInputSearch(e.target.value)}  type='text' placeholder='Search more images'/>
      </div>
 
    </div>
      </div>
    </>
  )
}
