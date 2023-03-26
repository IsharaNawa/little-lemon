import navLogo from "./Assets/imgs/Logo.svg";

const Nav = () => {
  return (
    <nav style={{ backgroundColor: "#EEA" }}>
      <img src={navLogo}></img>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">RESERVATIONS</a>
        </li>
        <li>
          <a href="#">ORDER ONLINE</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
