import PropTypes from "prop-types";

export default function User({user}) {
    const {name,email, phone} = user;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  )
}
User.propTypes = {
    user:PropTypes.object.isRequired
}