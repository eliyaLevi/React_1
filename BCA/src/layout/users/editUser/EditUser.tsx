import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../../provider/UserProvider";

export const EditUser = () => {
  const navigate = useNavigate();

  const { users, setUsers } = useContext(userContext);
  const { id } = useParams();

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    const findUser = users.find((user) => user.id === id);
    if (findUser) {
      setuserName(findUser.userName);
      setEmail(findUser.email);
      setAge(findUser.age);
      setImg(findUser.img);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.id === id ? { ...user, userName, email, age, img } : user
      )
    );

    navigate("/Displey");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="UserName">User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Age">Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <label htmlFor="Img">Img</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
           <button type="submit">Save!!</button>
      </form>
    </div>
  );
};
