import React, { useContext } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { userPro } from '../../provider/UserProvider'

export const DispleyUsers2 = () => {

    const users = useContext(userPro)
  return (
    <div>
    <PageHeader title="Welcome to the page of home" subtitle="home"/>
    <div className="card-list">
   {users!.map((user) => (
     <div key={user.id} className="card">
       <h3>UserName : {user.userName} </h3>
       <p>Email : {user.email}</p>
       <p>Age : {user.age}</p>
       <img src={user.img} alt="img dog" />
     </div>
   ))}
 </div>
 </div>
  )
}
