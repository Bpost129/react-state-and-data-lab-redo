import './ProfileInfo.css'

const ProfileInfo = ({ user }) => {
  return (
    <div className='profile-info'>
      <img src={user.avatar} alt="user avatar" />
      <h2>{user.name}</h2>
      <h4>@{user.username}</h4>
    </div>
  )
}

export default ProfileInfo