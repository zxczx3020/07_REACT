import { useEffect, useState, useCallback } from "react";


const CallbackComponent = () =>{

    const [size, setSize]= useState(200);
    const [isDark, setIsDark] = useState(false);

    const genSqureStyle = useCallback( ()=>{
        return{
            backgroundColor : "orangered",
            width : size,
            height : size
        }
        },[size])

    return(
        <>
            <div style={{backgroundColor:isDark? "black":"white"}}>
                <input type="range" min="100" max="300" onChange={e=>setSize(parseInt(e.target.value))}/>

                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSqureStyle={genSqureStyle}/>

            </div>
        </>
    )

}

const Square=({genSqureStyle})=>{
    const[style, setStyle]=useState({});

    useEffect(()=>{
        console.log("style 변경")
        setStyle(genSqureStyle());
    },[genSqureStyle]);

    return <div style={style}></div>
}

export default CallbackComponent;