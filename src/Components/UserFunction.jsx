import React, {useState, useEffect} from 'react';
import axios from 'axios';


const UserFunction = () => {
    const [users,setUser] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) =>{
            setUser(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    
    console.log(users);
    return (
        <div>
            <h1>Users <i>Function</i></h1>
            {users.map((user, id) => (
                  <div key={id}>
                      <h5>{user.name}</h5>
                      <h5>{user.email}</h5>
                      <h5>{user.username}</h5>
                    </div> 
            ))}    
        </div>
    );
}

export default UserFunction;
