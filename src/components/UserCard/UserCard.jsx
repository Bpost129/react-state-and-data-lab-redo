import './UserCard.css'

const UserCard = ({ user }) => {

  return ( 
    <div className='user-card'>
      {/* profile info */}
      <img src={user.avatar} alt="user avatar" />
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>

      {/* contact info */}
      <div>Address: {user.address.street} {user.address.suite}, {user.address.city}</div>
      <div>Company: {user.company.name}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>URL: {user.website}</div>
    </div>
  )
}

export default UserCard