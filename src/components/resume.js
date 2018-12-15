import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="http://bonjouritsbev.com/wp-content/uploads/2017/10/ec203a2588f836fa693f8fe0a87dc13814da9f65f705ef5879f2eca8154e858fa1fc220278564ab3_rw_1920.jpg"
                                alt="avatar"
                                style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Beverly Ackah </h2>
                        <h4 style={{ color: 'grey' }}> Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p> Engaged, creative computer science professional with 3 years experience. Seeking to leverage exemplary leadership skills, analytical skills, and coding skills as a software engineer.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <h5> Phone</h5>
                        <p> (206) 643-2705</p>
                        <h5> Email</h5>
                        <p> beverly99@hotmail.fr</p>
                        <h5> Web</h5>
                        <p> www.bonjouritsbev.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />



                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                    <h2> Education </h2>
                        <Education
                            startYear={2014}
                            endYear={2019}
                            schoolName="Computer Science Bachelors, Bellevue College, WA"
                            schoolDescription="Notable coursework: Object-Oriented Programming (Java, C++), Algorithms, Software Engineering." 
                        />


                    <hr style={{ borderTop: '3px solid #e22947' }} />


                     <h2> Skills </h2>
                        <Skills
                            skill="JavaScript"
                            progress={40}
                        />

                        <Skills
                            skill="Java"
                            progress={80}
                        />

                        <Skills
                            skill="HTML"
                            progress={80}
                        />

                        <Skills
                            skill="CSS"
                            progress={80}
                        />

                        <Skills
                            skill="NodeJS"
                            progress={25}
                        />

                        <Skills
                            skill="React"
                            progress={25}
                        />

                        
                        <hr style={{ borderTop: '3px solid #e22947' }} />


                        <h2>Experience </h2> 

                        <Experience
                        startYear={2018}
                        jobName="Technology and Entrepreneurial Representative for the Student Government"
                        jobDescription="• Remodeled the Student Government website."
                        jobDescription2="• Allocate Student Technology Funds to different departments across campus."
                        jobDescription3="• Organized Tech-related events."
                    />

                        <Experience
                            startYear={2018}
                            jobName="Capstone: Road Trip Advisor"
                            jobDescription="•  Road Trip Advisor is a web application helps people plan amazing road trips by  
                            suggesting a couple of road trip alternatives options optimized with user preferences. 
                            The stop suggestions will be made using rating and review analytics from third party APIs such as Yelp, AirBNB.
                            "
                            jobDescription2="•  Technologies used: Google APIs, React, NodeJS, HTML/CSS, JavaScript."
                        />

                       

                        <Experience
                            startYear={2017}
                            jobName="Book Sharing Application "
                            jobDescription="• BookShare is a platform that allows students to sell or exchange their textbooks with other users. 
                            Each user has the ability to add, modify or delete a book on their Bookshare profile."
                            jobDescription2="• Technologies used: MySQL, jQuery, Bootstrap3."
                        />


                       

                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Resume;
