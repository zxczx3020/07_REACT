import {useReducer} from "react";



const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'DECREMENT' :
           return {value:state.value-1}
        case 'INCREMENT' :
            return {value:state.value+1}
        case 'TEXT' :
            return {value:state.text}
    

        default:
            return state;
        
    }
   


    


}

const Input1 = () =>{
    const[state,dispatch] = useReducer(reducer,{
 value:0
    });


const {name}=state;
const onChangeHandler = e => dispatch(e.target);
return(
    <>

    <h1>count : {state.value}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>  
         <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>


    <div>
    </div>
    </>
)
}

const Input2 = () =>{
    const[state,dispatch] = useReducer(reducer,{
        text:''
    });
    const {text}=state;
    return(
        <>
    <div>
    <input type="text" name="text" onChange={(e=>dispatch({type:"TEXT"}))}/>
    <label>입력한 텍스트 : {text}</label>
    </div>
    </>  
     )
}

const Input3 = ()=>{
    return(
        <>
        
        </>
    )
}

export default Input1;