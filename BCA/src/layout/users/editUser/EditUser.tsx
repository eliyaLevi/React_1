import { useState, useEffect } from 'react';


interface User {
    id?: string;
    userName: string;
    email: string;
    age: number;
    img: string;
  }
  
  export interface Props {
    user: User;
    editUser: (user: User) => void;
  }
export const EditUser = (props: Props) => {

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>(0);
  const [img, setImg] = useState("");

   
    useEffect(() => {
     setuserName(props.user.userName)
     setEmail(props.user.email)
     setAge(props.user.age)
     setImg(props.user.img)

    }, [])
    
    
  return (
    <div>
        <input
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
         <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
         <input
        type="text"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
         <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      ;
      <button
        onClick={() => props.editUser({ ...props.user, userName ,email,age,img})}
      >Edit</button>
    </div>
  )
}
