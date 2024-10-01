import{BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Menu from "./pages/Menu";
import MenuOO from "./pages/MenuOO";
import Home from "./pages/Home";
import MenuDetail from "./pages/MenuDetail";
import { useState } from "react";




function App() {
  
  const [orderList, setOrderList]=useState([]);

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="main" element={<Home/>}/>
      <Route path="menu">
      <Route index element={<Menu/>}/>
      <Route path=":id" element={<MenuDetail orderList={orderList} setOrderList={setOrderList}/>}/>
      
      </Route>
      <Route path="menuOO" element={<MenuOO orderList={orderList}/>}></Route>

      </Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
