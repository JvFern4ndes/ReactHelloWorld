import React from 'react';

export default function post(props) {
    return (
        <>
            <article>
                <strong>{props.post.title}</strong><br />
                <small>{props.post.subtitle}</small>
            </article>
            <br />
        </>
        
    );
};