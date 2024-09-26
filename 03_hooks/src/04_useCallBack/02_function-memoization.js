
/*
    useMemo :
    특정 값을 메모이제이션한다..
    주로 연산이 비싼 값이나 복잡한 계산..
    사용 목적은 값이 자주 계산되는 것을 방지하여 성능 최적화..

    useCallBack : 
    특정 함수를 메모이제이션한다.. 함수의 재생성을 방지한다..
    자식 컴포넌트에 함수를 전달할 때 불필요하게 함수가 재생성 되는 것을 방지한다..

    useCallBack을 많은 함수에 남용하면 오히려 성능 저하가 발생할 수 있다..
    메모이제이션 자체도 메모리 비용이 들기 떄문..
    함수의 재생성에 큰 비용이 없는 경우 굳이 사용할 필요는 없다..
*/

import { useState, useCallback, useEffect } from "react";


const FunctionMemoization=()=>{
    const [number,setNumber] = useState(0);
    const [toggle,setToggle] = useState(false);

    const noneCallBack = ()=>{
        console.log(number);
    }

    const printNumber = useCallback(()=>{
        console.log(`current number : `+number);
    },[number]);

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨")
    },[printNumber])  

    return(
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <br/>

            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>

            <br/>

            <button onClick={printNumber}>printNumberState</button>
            
            <button onClick={noneCallBack}>noneCallBack</button>
        </>
    )
}

export default FunctionMemoization;