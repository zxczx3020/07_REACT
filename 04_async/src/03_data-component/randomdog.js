import {useEffect, useState} from "react";


const RandomDog=()=>{

    
    const [emojiName, setEmojiName]=useState('');


    useEffect(()=>{

        fetch("https://random.dog/ee9150b2-300a-4f1b-83be-d4d16b6223b1.jpg")
        .then(r=>r.json())
        .then(data=>setEmojiName(data));
    },[])

    return(
        <img>{emojiName}</img>
    )




}

const Random=()=>{
    return(
        <h1>{RandomDog}</h1>
    )
}

export default Random;