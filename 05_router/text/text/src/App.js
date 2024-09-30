import{BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Menu from "./pages/Menu";
import MenuOO from "./pages/MenuOO";
import Home from "./pages/Home";
import MenuDetail from "./pages/MenuDetail";



function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="main" element={<Home/>}/>
      <Route path="menu" element={<Menu/>}>
      <Route index element={<Menu/>}/>
      <Route path=":id" element={<MenuDetail/>}/>
      
      </Route>

      </Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
