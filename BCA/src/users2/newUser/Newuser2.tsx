import React, { useContext, useState } from "react";
import { userContext } from "../../provider/UserProvider";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";

export const Newuser2 = () => {
  const { users, setUsers } = useContext(userContext);

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>(0);
  const [img, setImg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newUser = { userName, email, age, img };

    setUsers([...users, newUser]);
    console.log(users);
    

    setuserName("");
    setEmail("");
    setAge(0);
    setImg("");
  };
  return (
    <div>
      <PageHeader title="Welcome to the page of new user" subtitle="new user" />
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="UserName">User Name</label>
          <input
            id="UserName"
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            placeholder="userName"
          />
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <label htmlFor="Age">Age</label>
          <input
            id="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="age"
          />
          <label htmlFor="Img">Img</label>
          <input
            id="Img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="img"
          />

          <button type="submit" style={{ backgroundColor: "green" }}>
            Add
          </button>
          <button type="submit" style={{ backgroundColor: "red" }}>
            <Link to={"/Displey"}>Cancel</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
