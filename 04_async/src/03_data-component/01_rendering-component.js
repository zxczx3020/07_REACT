import { useEffect, useState } from "react"

const Title = () => {
    return <h1>회원 목록</h1>
}

const ItemList= ()=> {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data=>setUsers(data));
    },[])

    return(
        <div>
            {users.map(user => <Item user={user}/>)}
        </div>
    )
}

const Item=({user})=>{
    const styles = {
        background:'powderblue',
        border:'1px dotted black',
        width:'350px',
        display:'inline-block',
        margin:'10px'
      }

      return(
        <div style={styles}>
            <h4>{user.name}</h4>
            <p>
                id:{user.id}<br/>
                email:{user.email}<br/>
                phone:{user.phone}<br/>
            </p>
        </div>
      )
}




const Container = () =>{
    return(
        <>
            <Title/>
            <ItemList/>
        </>
    )
}

export default Container;