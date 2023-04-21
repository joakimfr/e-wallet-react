import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCard from './views/AddCard'
import Home from './views/Home'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/cards',
      element: <AddCard />
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
