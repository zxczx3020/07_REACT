import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import { useNavigate } from "react-router-dom";
import { getMenuList } from "../api/MenuApi";

const Menu = () => {

    const [menuList, setMenuList]=useState([]);

    useEffect(()=>{
        setMenuList(getMenuList());
    },[])


    return(
        <>
        <h1>메뉴</h1>
        <ul>
        {menuList.map(menu=><MenuItem key={menu.id} menu={menu}/>)}
        </ul>

        <button>주문하기</button>
        </>
    )
}

export default Menu;