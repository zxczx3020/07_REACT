import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import { useNavigate, useParams } from "react-router-dom";
import { getMenuDetail, getMenuList } from "../api/MenuApi";

const Menu = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [menuList, setMenuList]=useState([]);

    useEffect(()=>{
        console.log(id);
        setMenuList(getMenuList(id));
        console.log(getMenuDetail(id));
    },[])
    
    const onClickcheck=()=>{

        navigate("/menuOO");

    }


    return(
        <>
        <h1>메뉴</h1>
        <ul>
        {menuList.map(menu=><MenuItem key={menu.id} menu={menu}/>)}
        </ul>

        <button onClick={onClickcheck}>주문하기</button>
        </>
    )
}

export default Menu;