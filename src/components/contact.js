import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                <h2> Beverly Ackah</h2>
                        <img src="http://bonjouritsbev.com/wp-content/uploads/2017/10/ec203a2588f836fa693f8fe0a87dc13814da9f65f705ef5879f2eca8154e858fa1fc220278564ab3_rw_1920.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> 
                        I’m a computer science senior graduating in Spring 2019 in Seattle, WA. Looking for a possible internship as a software developer to compliment theory learned.
                        I have a serious interest for web development and software engineering.
                        Currently sharpening my skills as a full-stack developer. </p>

                    </Cell>


                    <Cell col={6}>

                        <h2> Contact Me</h2>
                        <hr />

                        <div className="contact-list">

                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>

                                        <i className=" fa fa-phone-square" aria-hidden="true" />
                                        (206) 643-2705</ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>

                                        <i className=" fa fa-envelope" aria-hidden="true" />
                                       beverly99@hotmail.fr</ListItemContent>
                                </ListItem>


                                

                            </List>
                        </div>



                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;
