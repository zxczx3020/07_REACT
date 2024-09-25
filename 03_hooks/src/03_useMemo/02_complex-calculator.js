 import {useState} from "react";

// const hardCalculator = (num) =>{
//     for(let i = 0; i<99569999; i++){}
//     return num + 9956999;
// }

// const HardCalculator = () =>{
//     const [hardNumber, setHardNumber] = useState(0);
//     const hardSum = hardCalculator(hardNumber);

//     return(
//         <>
//             <h3>어려운 계산기</h3>
//             <input type="number" value={hardNumber} onChange ={e => setHardNumber(e.target.value)}/>
//             <span>+9956999 = {hardSum}</span>
//         </>
//     )
// }
// export default HardCalculator;

const hardCalculator =(num) =>{
    console.log("어려운 계산기");

    for(let i=0; i<19999; i++){}
    return num + 1000;
}

const easyCalculator = (num) => {
    console.log("쉬운계산기");
    return num+1;
}

const ComplexCalculator=()=>{
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyNumber);

    return(
        <>
            <h1>어려운 계산기</h1>
            <input type="number"
            value={hardNumber}
            onChange={e=>setHardNumber(e.target.value)}/>
            <span>+10000 = {hardSum}</span>
            <h1>쉬운 계산기</h1>
            <input type="number"
            value={easyNumber}
            onChange={e=>setEasyNumber(e.target.value)}/>
            <span>+1 = {easySum}</span>
        </>
    )
}
export default ComplexCalculator;