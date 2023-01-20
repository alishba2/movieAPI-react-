import React from 'react'
import SearchAppBar from '../Navbar/navbar'
import Movies from '../Movies/movies'
import home from '../Home/home.css'
export default function Home() {
  return (
    <div className='home'>
        <SearchAppBar/>
        <Movies/>
    </div>
  )
}
