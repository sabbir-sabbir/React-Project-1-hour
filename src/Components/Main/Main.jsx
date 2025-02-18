import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    loadData();
  }, [])

  const loadData = async ()=> {
    const result = await axios.get("http://localhost:3003/users")
    setUsers(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadData()
  }
  return (
    <>
    <div className="w-full h-auto px-12 py-3">
      <div className="flex justify-end items-center gap-2 py-2">
      
        <NavLink className="flex justify-between items-center gap-2" to='/users/add' ><img className="w-7 h-7 hover:scale-105 " src="/add.svg" alt="" /><button className="all-btn hover:scale-105 duration-200 transition-all"> ADD USERS</button></NavLink>
      </div>
  <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
        <th className="thead-t">ID</th>
        <th className="thead-t">Name</th>
        <th className="thead-t">Username</th>
        <th className="thead-t">Email</th>
        <th className="thead-t">Action</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm">
      {users.map((user, i) => (
        <tr key={i} className="tbody-row">
          <td className="tbody-td">{i + 1}</td>
          <td className="tbody-td">{user.name}</td>
          <td className="tbody-td">{user.username}</td>
          <td className="tbody-td">{user.email}</td>
          <td className="py-2 px-2 flex items-center gap-2 justify-center border border-gray-300">
            <NavLink to={`/users/${user.id}`} ><button className="all-btn">View</button></NavLink>

          <NavLink to={`/users/edit/${user.id}`} ><button className="all-btn">Edit</button></NavLink>
          
          <button onClick={()=> deleteUser(user.id)} className="all-btn !bg-red-500 !text-white">Delete</button>
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