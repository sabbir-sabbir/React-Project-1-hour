import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    loadData();
  }, [])

  const loadData = async ()=> {
    const result = await axios.get("http://localhost:3003/users")
    setData(result.data.reverse())
  }
  return (
    <>
    <div className="w-full h-auto px-12 py-3">
      <div className="flex justify-end items-center py-2">
        <NavLink to='/users/add' ><button className="all-btn">Add User</button></NavLink>
        
      </div>
  <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left border border-gray-300">ID</th>
        <th className="py-3 px-6 text-left border border-gray-300">Name</th>
        <th className="py-3 px-6 text-left border border-gray-300">Username</th>
        <th className="py-3 px-6 text-left border border-gray-300">Email</th>
        <th className="py-3 px-6 text-center border border-gray-300">Action</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm">
      {data.map((user, i) => (
        <tr key={i} className="tbody-row">
          <td className="tbody-td">{i + 1}</td>
          <td className="tbody-td">{user.name}</td>
          <td className="tbody-td">{user.username}</td>
          <td className="tbody-td">{user.email}</td>
          <td className="py-3 px-1 flex items-center gap-2 justify-center border border-gray-300">
          <button className="all-btn">View</button>
          <NavLink to='/users/edit' ><button className="all-btn">Edit</button></NavLink>
          
          <button className="all-btn !bg-red-500 !text-white">Delete</button>
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}

export default Main