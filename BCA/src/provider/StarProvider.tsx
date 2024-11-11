import React, { createContext, useState } from "react";

export interface User {
  id?: string;
  userName: string;
  email: string;
  age: number;
  img: string;
}

interface Userprops {
  stars: User[];
  setStars: React.Dispatch<React.SetStateAction<User[]>>;
}

interface Props {
  children: React.ReactNode;
}

export const starContext = createContext<Userprops>({
  stars: [],
  setStars: () => {},
});

export const StarProvider = ({ children }: Props) => {
  const [stars, setStars] = useState<User[]>([]);

  return (
    <>
      <starContext.Provider value={{ stars, setStars }}>
        {children}
      </starContext.Provider>
    </>
  );
};
