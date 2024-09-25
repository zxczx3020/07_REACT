import {useState, useMemo} from "react";



const NumberSqure = ()=>{


const [number,setNumber] = useState("")
const onChangeHandler = e => setNumber(e.target.value);


const Squre = useMemo(()=>{
    return number.split(",").map(num =>{
        return isNaN(num)? 0 : num **2;
    })
    }
)
const SqureList = Squre.map((Squre)=>
    <li>{Squre}</li>
)







return(
    <>
    <h1>숫자 제곱 계산기</h1>
    <input type="text" name="number" value={number} onChange={onChangeHandler}/>
    <label>제곱값 : {}</label><br/>
    <div>{SqureList}</div>
    
    </>
)





}
export default NumberSqure;