import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Home() {
    const history = useHistory();
    const [posts, setPost] = useState([]);
    useEffect(() => {
        api.get('posts').then(response => {
            setPost(response.data)
        })
    })

    async function handleComents(id){
        localStorage.setItem('postId',id)
        history.push('/coments')
    }
    return (
        <div className="container">
            <h1>PROVA P2</h1>
            <h1>CLIQUE NO POST DESEJADO PARA EXIBIR TODOS OS COMENTÁRIOS REFERENTES AO POST</h1>
            <div className="content">
                <ul>
                    {
                        posts.map(post => (
                            <div>                            
                            <li key={post.id} onClick={() => handleComents(post.id)}>
                            <strong> POST NÚMERO {post.id}</strong>
                                <h1>{post.title}</h1>
                                <p>{ post.body}</p>
                                
                            </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}