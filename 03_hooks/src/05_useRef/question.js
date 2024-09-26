import { useMemo, useState } from "react";


const NoticeBoard= ()=>{

    const[form,setForm]=useState([
        {title:'',
        content:''},
    ]);
    const [inputText, setInputText] = useState("");
    const [outputText, setOutput] = useState("");
    const onChangeHandler = e => setInputText(e.target.value);
    const onChangeHandler1 = e => setOutput(e.target.value);

    const onClickHandler =e=>{
        const plusTitle = form.concat({
            title:inputText,
            content:outputText
        })

        setForm(plusTitle)
        setForm("");


    }
    const hello = form.map(form=>{
        return(
            <label>
            {form.title}
            </label>
        )
    })



    


    return(
        <>
        <h1>게시판</h1>
        <input type="text" name="title" placeholder="제목" value={inputText} onChange={onChangeHandler}/> <br/><br/>
        <input type="text" name="content" placeholder="내용" value={outputText} onChange={onChangeHandler1}/><br/>
        <button onClick ={onClickHandler}>게시</button><br/><br/>
        <input type="text" placeholder="검색"/>
        
        <label>{hello}</label>
        </>
    )
}

export default NoticeBoard;