import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const OneUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
          name: "",
          username: "",
          email: "",
          phone: "",
          website: ""
      });

  const LoadUser = async ()=> {
    const res = await Axios.get(`http://localhost:3003/users/${id}`)
    setUser(res.data)
  }

  useEffect(()=> {
  LoadUser();
  }, [])
  return (
    <>
    <div className="w-full h-auto py-5 px-14  flex flex-col items-center gap-5 ">
     <div><h1>Rnadom ID: {id} </h1></div>
     <div className="flex flex-col items-center gap-2">
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
     
     </div>
    </div>
    </>
  )
}

export default OneUser;