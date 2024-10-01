

const API_KEY = "b2f485cd2f274a5ba62325da31653420"


const getLatesNews = () => {
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  const response = async(url)
  console.log(response);


}

export default getLatesNews();