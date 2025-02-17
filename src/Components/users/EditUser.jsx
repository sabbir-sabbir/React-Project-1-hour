import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;

    const onInputChange = (e)=> {
          setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit =  async  (e)=> {
        e.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/")
    };
   
    const loadUser = async ()=> {
        const res = await Axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data);
    }

    useEffect(()=> {
        loadUser();
    },[]);
  return (
     <>
    <div className="w-full h-auto px-14 py-5">
   <div className="flex flex-col   justify-center items-center gap-4">
    <div><h1 className="text-zinc-600 text-4xl my-4">EDIT USERS HERE !</h1></div>
    <form onSubmit={(e)=> onSubmit(e)}  className="flex flex-col justify-start items-start gap-4" action="">
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={name} name="name" placeholder="Enter Your Name" autoComplete='off' />
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={username} name="username" placeholder="Enter Your UserName" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="email" value={email} name="email" placeholder="Enter Your Email Address" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={phone} name="phone" placeholder="Enter Your Phone Number" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={website} name="website" placeholder="Enter Your Website URL" autoComplete='off'/>
        <input  className="all-input !bg-sky-300 !text-zinc-700 !font-semibold" type="submit" value="UPDATE !"   />
       
    </form>
   </div>
  </div>
     </>
  )
}

export default EditUser