import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="http://bonjouritsbev.com/wp-content/uploads/2017/10/ec203a2588f836fa693f8fe0a87dc13814da9f65f705ef5879f2eca8154e858fa1fc220278564ab3_rw_1920.jpg"
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1> Software Developer </h1>
                            <hr />
                            <p> Java | JavaScript | HTML/CSS | SQL | C++ | React.JS </p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/beverly-ackah-3b6226139/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Beverlyckh" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/fcc4d27b576-4cdd-4a4d-96d8-02659e4e6358" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;