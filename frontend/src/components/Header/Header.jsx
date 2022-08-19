import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'

const Header = ({ setEdit }) => {
  const handleEdit = () => {
    setEdit(true)
  }
  const user = useSelector(state => state.user)
  return (
    <div>
      <header style={{ backgroundColor: `${user.theme}`, backgroundImage: `linear-gradient(180deg,${user.theme} 2%,${user.theme} 65%, #181818 100%)` }}>
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>Edit</div>
          <img src={user.avaUrl} alt="" className="info-ava" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age} years old</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </div>
  )
}

export default Header