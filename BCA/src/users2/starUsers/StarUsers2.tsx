import React, { useContext } from 'react'
import { starContext } from '../../provider/StarProvider'

export const StarUsers2 = () => {

    const {stars, setStars} = useContext(starContext)

  return (
      <>
      <h1>רשימת המועדפים שלי</h1>
      <div className="card-list">
      {stars.map((star) => (
        <div key={star.id} className="card">
          <h3>UserName : {star.userName} </h3>
          <p>Email : {star.email}</p>
          <p>Age : {star.age}</p>
          <img src={star.img} alt="img dog" />
          <button>
            Delte
          </button>
        </div>
      ))}
    </div>
    </>
  )
}
