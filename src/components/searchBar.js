import React ,{useState} from 'react'
import 'regenerator-runtime/runtime';

 const SearchBar = ({setData}) => {
//   console.log(setData)
   
  const [city , setCity] = useState("")
  let apiKey = "f72e8e8c2282be441339d51687885099"

 async function fetchData(){
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}` ,{
        method:'GET',
      })
    //   console.log(response)
      let data = await response.json();
      setData(data)
      setCity("")
      console.log(data)
  }
  return (
    <div >
        <input className='search' type='text' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter a city' />
       <button onClick={fetchData}>submit</button>
    </div>
  )
}
export default SearchBar