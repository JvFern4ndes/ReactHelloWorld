import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
    { title: 'Title#01', subtite: 'Sub#01', likes: 20 },
    { title: 'Title#02', subtite: 'Sub#02', likes: 10 },
    { title: 'Title#03', subtite: 'Sub#03', likes: 50 },
];

function App() {
    return (
        <>
            <Header>
                <h2>Posts da Semana</h2>
            </Header> 

            <hr />

            {posts.map(post => (
                <Post 
                    key={post.title}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                    }}
                />
            ))}
        </>
    );
}

export default App;