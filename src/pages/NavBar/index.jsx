import "./style.css";
const NavBar = () => {
  return (
    <nav>
      <ul class="menu">
        <div class="logo">
          <li>
            <a href="#">FollowAndrew1</a>
          </li>
          <li>
            <a href="#">FollowAndrew2</a>
          </li>
          <li>
            <a href="#">FollowAndrew3</a>
          </li>
        </div>

        <li class="item">
          <a href="#">Home</a>
        </li>
        <li class="item">
          <a href="#">About</a>
        </li>
        <li class="item">
          <a href="#">Services</a>
        </li>

        <li class="item button">
          <a href="#">Log In</a>
        </li>
        <li class="item button secondary">
          <a href="#">Sign Up</a>
        </li>
        <li class="toggle">
          <span class="bars">bars</span>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
