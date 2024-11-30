import './UserCard.css'

const UserCard = ({ user }) => {

  return ( 
    <div className='user-card'>
      <img src={user.avatar} alt="user avatar" />
      <div>Name: {user.name}</div>
      <div>Company: {user.company.name}</div>
      <div>Contact: {user.phone}</div>
    </div>
  )
}

export default UserCard