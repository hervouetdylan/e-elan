import './header.css';


const Header = () => {
  return (
    <body>
      <div class="header">
        <ul id="menu-deroulant">
	        <li><a href="#">Categories</a>
		        <ul>
              <li><a href="#">lien sous menu 1</a></li>
              <li><a href="#">lien sous menu 1</a></li>
		        </ul>
	        </li>
          <li><a href="#">Best-Sellers</a>
		        <ul>
              <li><a href="#">Lien sous menu 2</a></li>
              <li><a href="#">Lien sous menu 2</a></li>
		        </ul>
	        </li>
          <li><a href="#">Help</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
          <li><a href="#">About Us</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a>
            <ul>
              <li><a href="#">Lien sous menu 3</a></li>
              <li><a href="#">Lien sous menu 3</a></li>
            </ul>
          </li>
        </ul>
        <h1>E-Elan</h1>
        <forms class="Sign Up">
          <button type="text">Sign Up</button>
        </forms>
      </div>
    </body>
  );
}

export default Header;
