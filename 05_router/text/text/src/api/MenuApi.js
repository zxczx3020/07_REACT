import menus from "../data/Menu-detail.json";

// 1. 메뉴 전체 반환
export function getMenuList(){
    return menus;
}

 // 디테일 페이지 함수
 export function getMenuDetail(id){

    return menus.filter(menu => menu.id === parseInt(id))[0];
 }