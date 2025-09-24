import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

export const Images = () => {

 const {pixaImg} =   useContext(PixabayContext)

  return (
    <div className='imgMainDiv'>
    {
        pixaImg.map((elem, index)=>{
            console.log(elem)
            let {id, pageURL, type, tags, previewURL, largeImageURL} = elem
            return(
                <div key={index} className='imgHandle'>
                 <img src={largeImageURL}/>   
                    
                </div>
            )

        })
    }
        
    </div>
  )
}
