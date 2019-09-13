import React from "react";

const Navbar = props => {
  const { brand, currentItem, allItems, onNavChange } = props;
  const getLinkClasses = item => {
    return item === currentItem
      ? "nav-link custom-nav-link active"
      : "nav-link custom-nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="custom-brand" href="#">
        {brand}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {allItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                className={getLinkClasses(item)}
                href="#"
                onClick={() => onNavChange(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
