import React from 'react'
import style from "./footer.module.css"

export const Footer = () => {
  return (
    <footer>
      <p>
       created by Eliya levi &copy;{new Date().getFullYear()}
      </p>
    </footer>
  )
}
