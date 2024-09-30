import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuApi";


const MenuDetail = () =>{
    const {id} = useParams();


    const [menu,setMenu] = useState({
        name:'',
        price:'',
        description:''


    });

    useEffect(()=>{
        setMenu(getMenuDetail(id));
    },[])

    return(
        <>

        <h1>{menu.name}</h1>
        <h3>가격 : \{menu.price}</h3>
        <h3>설명 : {menu.description}</h3>
        

        </>
    )
}
export default MenuDetail;