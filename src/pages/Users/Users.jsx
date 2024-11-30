import { userData } from "../../data/userData"
import './Users.css'
console.log(userData)

const Users = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {/* map the userData to UserCard components here */}
        {userData.map(user => 
          <div key={user.id}>{user.username}</div>
        )}
      </div> 
    </>
  )
}

export default Users;