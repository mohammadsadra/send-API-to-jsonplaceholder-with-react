import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../.././loading.gif';
import User from '../User/User';
import style from './userlist.module.css';



function UserList() {
    const [data, setData] = useState([])

    useEffect(async () => {
        document.getElementById('loading').style.display = '';
        document.getElementById('list').style.display = 'none';
    const response = await axios.get('https://jsonplaceholder.typicode.com/users',)
    setData(response.data);
    document.getElementById('loading').style.display = 'none';
    document.getElementById('list').style.display = '';
    
    }, [])


    return(
        
        <div>
            <div id='loading'>
                <img src={logo}  alt="logo" />
            </div>
            <div>
            <div id='list'>
            <h3>User List</h3>
            <div className={style.userContainer} id='users'>
                {
                    data.map((user)=>{
                        return <User key={user.id} name={user.name} website={user.website} phone={user.phone} email={user.email}></User>
                    })
                }
            </div>
            </div>
            </div>
        </div>
    )
    
}

export default UserList