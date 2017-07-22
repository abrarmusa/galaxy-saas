import React from 'react';

// just the footer of the page
export default class Footer extends React.Component {

    render() {
      return (
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  MERN starter bolierplate for easier building fullstack apps.
                </p>
                <p>
                  <a className="icon" href="https://github.com/" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </footer>
        )
    }
}

