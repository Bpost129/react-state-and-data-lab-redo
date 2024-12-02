import './ContactInfo.css'

const ContactInfo = ({ user }) => {
  return (
    <div className='contact-info'>
      <h2>{user.company.name}</h2>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
      <br />
      <div>{user.address.street}</div>
      <div>{user.address.suite}</div>
      <div>{user.address.city} {user.address.zipcode}</div>
    </div>
  )
}

export default ContactInfo