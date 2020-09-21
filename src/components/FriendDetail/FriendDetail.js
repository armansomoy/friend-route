import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data));
    }, [])

    // const {name, email, phone}  = friend.data;

     return (
        <div>
            <p>This is Friend Detail : {friendId} </p>
            <h3>Name: {friend.name}</h3>
            <h4> Gmail: {friend.email}</h4>
            <h4> Phone: {friend.phone}</h4>
            
        </div>
    );
};

export default FriendDetail;