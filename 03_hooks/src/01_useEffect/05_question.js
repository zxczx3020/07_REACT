import {useState, useEffect} from "react";


const Application = ()=>{

    const [timers, setTimers] = useState([]);
    const onChangeHandler = e => setInputText(e.target.value);

    const [inputText, setInputText] = useState("");

    const [dap, setDap] = useState(2024);

    
    const year=(interval)=>{
        
        clearInterval(interval);



        if(inputText == dap){

            alert("정답입니다.")
            
            
        }else{
            alert("오답입니다. 정답은 2024년 입니다.")

        }

        


            
    }



    
const Timer = (id) =>{

    const [count, setCount] = useState(10);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(value => value-1)

        },1000);
        

 if(count <= 0){
    alert("시간초과")

    clearInterval(interval);

 }

        return ()=> clearInterval(interval);
  
    
    },[count])


    return(
        <>
        <h3>남은 시간 : {count} 초</h3>
        </>
    )

    

    
}






    return(


        
        <div>
            <h1>문제 : 올해는 몇 년도인가요? </h1>

            <p><Timer/></p>
            <input type="number" name="yearNumber" value={inputText} onChange={onChangeHandler}></input>
            <button onClick={year}>제출</button>
        </div>
    )
}


export default Application;