import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userPro } from "../../../provider/UserProvider";

interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

export interface Props {
  user: User;
  UpdateUser: (user: User) => void;
}
export const EditUser = (props: Props) => {
  const navigate = useNavigate();

  const users = useContext(userPro)
  const { id } = useParams();

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    setuserName(props.user.userName);
    setEmail(props.user.email);
    setAge(props.user.age);
    setImg(props.user.img);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    props.UpdateUser({ userName, email, age, img });

    setuserName(props.user.userName);
    setEmail(props.user.email);
    setAge(props.user.age);
    setImg(props.user.img);
    navigate("/users");
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
        <button
          onClick={() =>
            props.UpdateUser({ ...props.user, userName, email, age, img })
          }
        >
          <Link to={"/users"} className="nav_link">
            Save
          </Link>
        </button>
      </form>
    </div>
  );
};
