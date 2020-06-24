import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import './style.css';

export default function Home(){
    const history = useHistory();
    const [post,setPost] = useState([]);

    useEffect(() => {
        api.get('posts').then(Response => {
            setPost(Response.data)

        })
    })
    return (
        <div className="container">            
             <h1>Bem vindo a prova...</h1>
             <div className="content">
              <ul>{
                  post.map(post => (
                    <div className='list'>
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <h1>{post.body}</h1>
                        </li>                        
                    </div>
                  ))       
              }</ul>
            </div>           
        </div>
    )
}