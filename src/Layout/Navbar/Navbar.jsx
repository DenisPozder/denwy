import React from 'react'
import './navbar.scss'
import { useDarkMode } from '../../Contexts/DarkTheme'
import { Link, NavLink } from 'react-router-dom'
import { BsCircleHalf, BsSearch } from 'react-icons/bs'

const Navbar = () => {

  const { toggleDarkMode } = useDarkMode()

  const NavbarLinks = [
    {
      id: 1,
      title: "Movies",
      link: '/movies'
    },
    {
      id: 2,
      title: "Tv Shows",
      link: '/tv-shows'
    },
    {
      id: 3,
      title: "Actors",
      link: '/actors'
    },
    {
      id: 4,
      title: "Coming Soon",
      link: '/coming-soon'
    },
  ]

  return (
    <nav>
      <div className='navbar'>
        <div className="navbar-logo">
          <Link to='/'><h1>DEN<span>Wy</span></h1></Link>
        </div>
        <div className="navbar-links">
          {
            NavbarLinks.map((link, i) => (
              <NavLink className='navbar-link' to={link.link} key={i}>{link.title}</NavLink>
            ))
          }
        </div>
        <div className="navbar-interactions">
          <button onClick={toggleDarkMode} className='navbar-toggle-theme'><BsCircleHalf /></button>
          <Link to='/memberships'><button className='join-button'>join now</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar