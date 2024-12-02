const ContactInfo = ({ user }) => {
  return (
    <>
      <div>Address: {user.address.street} {user.address.suite}, {user.address.city}</div>
      <div>Company: {user.company.name}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>URL: {user.website}</div>
    </>
  )
}

export default ContactInfo