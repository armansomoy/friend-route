import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id } = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = (`./friend/${friendId}`);
        history.push(url);
    }


    const friendStyle = {
        border: '1px solid blue', 
        padding: '20px',
        margin: '20px',
        borderRadius: '5px'
    }

    return (
        <div style={friendStyle}> 
            <h2>Name: {name}</h2>
            <h5>Email: {email}</h5>
            <p> Id : <Link to={`/friend/${id}`}>Show Detail of {id} </Link> </p>
            <br/>
            <button onClick={ () => handleClick(id)} >Click me</button>
        </div>
    );
};

export default Friend;