import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const AddUser = () => {
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
        await Axios.post("http://localhost:3003/users", user);
        navigate("/")
    };
  return (
   <>
  <div className="w-full h-auto px-14 py-5">
   <div className="flex flex-col   justify-center items-center gap-4">
    <div><h1 className="text-zinc-600 text-4xl my-4">ADD USERS HERE !</h1></div>
    <form onSubmit={(e)=> onSubmit(e)}  className="flex flex-col justify-start items-start gap-4" action="">
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={name} name="name" placeholder="Enter Your Name" autoComplete='off' />
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={username} name="username" placeholder="Enter Your UserName" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="email" value={email} name="email" placeholder="Enter Your Email Address" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={phone} name="phone" placeholder="Enter Your Phone Number" autoComplete='off'/>
        <input onChange={(e)=> onInputChange(e)} className="all-input" type="text" value={website} name="website" placeholder="Enter Your Website URL" autoComplete='off'/>
        <input  className="all-input !bg-sky-300 !text-zinc-700 !font-semibold" type="submit" value="Submit"   />
       
    </form>
   </div>
  </div>
   </>
  )
}

export default AddUser