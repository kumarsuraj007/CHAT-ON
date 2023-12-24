import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ChatPage = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/api/chat')
        .catch((err) => {
            console.log('Error', err)
        });
        setData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchData();
    }, [])


  return (
    <div>{data.map(item => (
        <div key={item._id}>{item.chatName}</div>
    ))}</div>
  )
}

export default ChatPage