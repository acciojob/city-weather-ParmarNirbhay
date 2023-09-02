import React ,{useState} from 'react'

 const Data = ({data}) => {
 console.log(data)

  return (
    <div className='weather'>
       { 
       (data.cod == "200") && <div  >
                    <h1>{data.name}</h1>
                    <p>{data.main.temp}</p>
                    <p>{data.weather[0].main}</p>
                    
         </div>
     }      
    
    </div>
  )
}
export default Data