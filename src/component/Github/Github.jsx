import React, { useEffect, useState, } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/devshivam12')
    //     .then(response => response.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data)
    //     })
    // }, [])
  return (
    <div>
        <p>Github followers : {data.followers} </p>
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/devshivam12')

    return response.json()
}
