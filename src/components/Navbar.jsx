import { Link } from "react-router-dom";

export default function Navbar() {


  return (
    <div className="navbar">

      <div className="link">
        <Link to="/" style={{ color: "#f1356d" }}> Form</Link >
      </div>
      <div className="link">
        <Link to="/api" style={{ color: "#f1356d" }}> Data from the node server</Link >
      </div>
    </div >
  )
}