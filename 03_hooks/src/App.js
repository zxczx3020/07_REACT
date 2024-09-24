
import {useState} from "react";
import TimeApp from "./02_userEffect/App";
import Application from "./01_useEffect/05_question";





function App() {

  const [message,setMessage] = useState("안녕하세요");

  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* {<UseEffectUpdate/>}; */}
      {/* {<Container/>} */}
      {/* {<TimeApp/>} */}
      {<Application/>}
    </>
  );
}

export default App;
