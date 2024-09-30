import { useMemo, useState } from "react";


const NoticeBoard= ()=>{
    

    const [nextId, setNextId] = useState(2);

    const[form,setForm]=useState([
        {id:1,
            title:'기본 게시글',
        content:'기본 내용'},
    ]);
    const [inputText, setInputText] = useState("");
    const [outputText, setOutput] = useState("");
    const onChangeHandler = e => setInputText(e.target.value);
    const onChangeHandler1 = e => setOutput(e.target.value);

    const onClickHandler =e=>{
        const plusTitle = form.concat({
            id:nextId,
            title:inputText,
            content:outputText
        })

        setForm(plusTitle)
        setNextId(nextId+1)
        setInputText("");
        setOutput("");


    }

    const onRemove = id =>{

        const plusTitle = form.filter(title => title.id !== id);
        setForm(plusTitle);
      }

    const hello = form.map(form=>{
        return(
            <>
            <label key={form.id}>
                <ul>
                    <li>
                {form.title}
                </li>
                <br/>
                {form.content}

                </ul>

            </label>
            <button onClick={()=>onRemove(form.id)}>삭제</button>
            </>
            
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