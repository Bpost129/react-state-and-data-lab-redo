import { useState } from 'react'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ContactInfo from '../ContactInfo/ContactInfo'
import './UserCard.css'

const UserCard = ({ user }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return ( 
    <div className='user-card'>

      {!show && <ProfileInfo user={user} />}
      {show && <ContactInfo user={user} />}
      <button onClick={handleShow}>Show {show ? 'Profile' : 'Contact'} Info </button>
    </div>
  )
}

export default UserCard