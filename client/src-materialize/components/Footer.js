import React from 'react';

// just the footer of the page
export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer" className="page-footer blue darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">MERN Stack App</h5>
                <p className="grey-text text-lighten-4">Just a MERN Starter</p>                
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#" target="_blank">App Repository</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <p className="left">© 2017</p>
            <p className="right">Created by: <a className="grey-text text-lighten-4" href="https://github.com/alan2207" target="_blank">Alan</a></p>
            </div>
          </div>
          </footer>
        )
    }
}

