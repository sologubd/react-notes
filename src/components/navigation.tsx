import React from "react";

class NotesNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <span className="icon is-medium">
                  <i className="fa fa-plus"></i>
                </span>
                <span className="icon is-medium">
                  <i className="fa fa-edit"></i>
                </span>
                <span className="icon is-medium">
                  <i className="fa fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }   
}

export { NotesNavbar }
