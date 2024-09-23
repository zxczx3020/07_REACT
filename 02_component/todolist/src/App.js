
import React from 'react';
import "./app.css";




const {useState} = React;

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutput] = useState("");
  const [nextId, setNextId] = useState(4);
  const onChangeHandler = e => setInputText(e.target.value);
  const onChangeHandler1 = e => setOutput(e.target.value);
  const [backgroundColor,setBackgroundColor] = useState("white");
  const [color, setColor] = useState("black");

  const [hello,setHello]= useState([
    {id:1,name:"안녕"},
    {id:2,name:"안녕2"}
  ])

  const onClickHandler = () =>{
    const changeNames = hello.concat({
        id:nextId,
        name:inputText
    });
    

    setHello(changeNames);
    setNextId(nextId+1);
    setInputText("");

}




const onRemove = id =>{

  const changeNames = hello.filter(name => name.id !== id);
  setHello(changeNames);
}

const [color1, setColor1] = useState("");

const style ={
  color : color1
}

const onClickColor = () =>{

    setColor1(outputText);

}

const onToggleCheck = (id) => {
  const updatedNames = hello.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setHello(updatedNames);
};


  const helloList = hello.map(hello => {
   
    return(<><input type="checkbox" class="checked" checked={hello.checked} onChange={() => onToggleCheck(hello.id)} /> 
    <label key={hello.id} style=
    {{textDecoration: hello.checked ? "line-through" : "none",}}>{hello.name}
      <button onClick={()=>onRemove(hello.id)}>삭제</button>
      </label><br/></>)
})



  return (

<div style={{backgroundColor,color}}>
  
    
    <h1>todolist</h1>
    <button onClick={()=>setBackgroundColor("black")} onDoubleClick={()=>setBackgroundColor("white")}>다크모드</button><br/><br/>
    <ul style={style}>
    {helloList}
    </ul>
    <input type="text" name="text1" value={inputText} onChange={onChangeHandler}/><button onClick={onClickHandler}>추가</button> 
    <input type="text" name="text2" value={outputText} onChange={onChangeHandler1}/><button onClick={onClickColor}>색변경</button>

    </div>
    

  );
}

export default App;
