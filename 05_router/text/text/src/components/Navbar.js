import {NavLink} from "react-router-dom";


const Navbar = ()=>{
    const activeStyle = {
        backgroundColor : "purple",
        color : "white"
    }

    return(
        <div>
            <ul>
                <li><NavLink to={"/main"} style={({isActive})=> isActive? activeStyle:null}>홈</NavLink></li>
                <li><NavLink to={"/menu"} style={({isActive})=> isActive? activeStyle:null}>메뉴</NavLink></li>
                <li><NavLink to={"/menuOO"} style={({isActive})=> isActive? activeStyle:null}>주문 확인</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;