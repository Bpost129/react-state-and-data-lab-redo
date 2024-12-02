import './UserCard.css'

const UserCard = ({ user }) => {

  return ( 
    <div className='user-card'>
      {/* profile info */}
      <img src={user.avatar} alt="user avatar" />
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>

      {/* contact info */}
      {/* <div>Address: {user.address}</div> */}
      <div>Company: {user.company.name}</div>
      <div>Contact: {user.phone}</div>
    </div>
  )
}

export default UserCard