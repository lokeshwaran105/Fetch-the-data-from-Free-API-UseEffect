import { useState,useEffect } from "react";
function Data(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
      setUsers(data);
      setLoading(false);
      })
    .catch (error =>{
        console.error("if it is not loading will be error message");

        setLoading(false);
    });
},[]);
    if(loading){
        return <p>Loading.....</p>;
    }

    return(
        <>
        <h1>List out the Users in API</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        </>
    );
}
export default Data;