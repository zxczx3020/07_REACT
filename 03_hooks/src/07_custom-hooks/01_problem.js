import { useState } from "react"


const HooksProblem = ()=>{

    const [name, setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    // const handlerName = e => setName(e.target.value);
    // const handlerPassword = e => setPassword(e.target.value);
    const handleEmail = e => setEmail(e.target.value);

    const handleName = e => {
        setName(e.target.value);

        if(e.target.value.match(/[가-힣]+/)){
            console.log("한글 잘 입력중이네")
        }
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
        if(e.target.value >= 10){
            console.log("10자리 이상 잘 입력함.")
        }
    }

    return(
        <>
            <label>이름 : </label>
            <input type="text" onChange={handlerName}/>
            <br/>
            <label>비밀번호 : </label>
            <input type="password" onChange={handlerPassword}/>
            <br/>
            <label>이메일 : </label>
            <input type="email" onChange={handleEmail}/>
            <br/>
            <h4>name : {name}</h4>
            <h4>pass : {password}</h4>
            <h4>email : {email}</h4>
        </>
    )

}