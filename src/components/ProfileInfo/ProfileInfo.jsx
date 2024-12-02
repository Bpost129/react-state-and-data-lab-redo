const ProfileInfo = ({ user }) => {
  return (
    <>
      <img src={user.avatar} alt="user avatar" />
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
    </>
  )
}

export default ProfileInfo