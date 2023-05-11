import { Link } from 'react-router-dom'

const LogoutSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center  gap-2">
      <h3>Logged out</h3>
      <Link to="/">Home</Link>
    </div>
  )
}

export default LogoutSuccess
