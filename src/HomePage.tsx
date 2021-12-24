import { Outlet, Link } from "react-router-dom";
function HomePageforLink() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          padding: "16px",
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        {/*  <Link to="/Profile ">Profile </Link>*/}
        <Link to="/Protfolio">Protfolio</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default HomePageforLink;
