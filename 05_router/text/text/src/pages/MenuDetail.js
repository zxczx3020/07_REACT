import { useEffect, useState } from "react";
import {   useNavigate, useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuApi";
import { setOrderList } from "../App";


export const MenuDetail = ({orderList, setOrderList}) =>{
    const {id} = useParams();


    const [menu,setMenu] = useState({
        name:'',
        price:'',
        description:''


    });

    useEffect(()=>{
        console.log(id);
        setMenu(getMenuDetail(id));
        console.log(getMenuDetail(id));
        
    },[])

    const navigate = useNavigate();


    const onClickBack=()=>{

        navigate(-1);

    }


    const onClickListPlus =()=>{
        setOrderList([...orderList, menu])
        }


    return(
        <>

        <h1>{menu.name}</h1>
        <h3>가격 : \{menu.price}</h3>
        <h3>설명 : {menu.description}</h3>

        <button onClick={onClickListPlus}>장바구니 추가</button> <button onClick={onClickBack}>돌아가기</button>

        </>
    )
}
export default MenuDetail;