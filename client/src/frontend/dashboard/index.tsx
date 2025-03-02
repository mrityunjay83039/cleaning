import { Link } from "react-router-dom"


const Dashboard = () => {
  return (
    <div>
      Welcome to Admin Panel | 
      <Link to="/logout"> Logout</Link>
    </div>
  )
}

export default Dashboard
