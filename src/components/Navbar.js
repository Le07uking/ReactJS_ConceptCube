import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <p>What happened</p>
      </div>
      <div className="rightSide">
        <a>INTRODUCTION</a>
        <a>SOLUTION</a>
        <a>RATE PLAN</a>
        <a>LOGIN</a>
        <a>APPLY FOR FREE USE</a>
      </div>
    </div>
  );
}

export default Navbar;
