import React from 'react'
import { PageHeader } from '../../../components/PageHeader'
import { Link } from 'react-router-dom'

export const Cards = () => {
  return (
    <div>
      <PageHeader title="Welcome to the page of Cards" subtitle="Cards"/>
      <div>
        <Link to={"/users"}>חזרה לדף הבית</Link>
      </div>
    </div>
  )
}
