import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-bar">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        <h1 className="group">Eskul Coding</h1>
        <div className="nav-bar">
          <p>BOOK</p>
          {/* <i class="fa-solid fa-bars" title="menu">
          </i> */}
        </div>
      </nav>
      <div className="header-title">
        <h2>Eskul Coding</h2>
        <p>Eskul Pemrograman di Smakzie</p>
      </div>
    </header>
  );
}

export default Header;
