import axios from "axios";



const callApi=()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r=>r.json()).then(d=>console.log(d)); // json으로 바디로 가서 바디를 출력
}

const axiosCall=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=> console.log(res.data)); // axios가 알아서 바디 제공
}


/*
    Axios : 요청 처리에 대한 여러가지 기능을 제공해준다..
    따라서 패키지 크기가 상대적으로 더 크고 무겁다..

    Fetch : 기본 브라우저 내장 API 이다..
    가볍고 빠르다. 하지만 여러 처리를  수동으로 해주어야 한다..

*/ 

const AxiosCallComponent = ()=>{
    return(
        <>
            <button onClick={callApi}>fetch 요청</button>
            <button onClick={axiosCall}>axios 요청</button>
        </>
    )
}
export default AxiosCallComponent;