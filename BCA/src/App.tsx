import { Layout } from './layout/Layout'
import './App.css'
import { Router } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
    <Layout Children={<AppRouter/>}/>
    </>
  )
}

export default App
