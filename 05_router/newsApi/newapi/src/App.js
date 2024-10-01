import axios from "axios";
import { useState } from "react";


function App() {

  const [data,setDate]=useState();



  const API_KEY = "b2f485cd2f274a5ba62325da31653420"


  const getLatesNews = async () => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);

    setDate(response.data);

  
  
  }

  getLatesNews()
  


  return(
    <>  
    <div>
   
    </div>

      </>
  )


}

export default App;
