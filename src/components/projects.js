import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (


                < div className="projects-grid" >
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }}></CardTitle>
                        <CardText> BookShare Project using the following technologies: MySql, PHP, BootStrap3. </CardText>

                        <CardActions border>
                            <Button colored href="https://github.com/Beverlyckh/BookShare" rel="noopener noreferrer" target="_blank">GitHub </Button>
                            <Button colored href="https://drive.google.com/file/d/1srwxHSzt-P_2QlFEw5C3oQNjfo0TXbp2/view" rel="noopener noreferrer" target="_blank">Demo</Button>
                        </CardActions>



                    </Card>

                </div>
            )

        } else if(this.state.activeTab === 1) {
            return (
                

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}></CardTitle>
                    <CardText> Road Trip Advisor, capstone project using the following technologies: Google APIs, React, NodeJS, HTML/CSS, JavaScript.</CardText>

                    <CardActions border>
                        <Button colored href="https://github.com/shailahirji/RoadTripAdvisor" rel="noopener noreferrer" target="_blank">GitHub </Button>
                        <Button colored href="https://docs.google.com/document/d/1aLGlXoLIEamAil1PFfOe-jgGSpmQ2hZ8G58vHGNznX4/edit" rel="noopener noreferrer" target="_blank">Documentation </Button>
                    </CardActions>

                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>
               
                )
        } else if(this.state.activeTab === 2){
            return (
                

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/9f78fc09-faec-4068-82bd-09e7cc8bbf34/File/e19ea0216ae8395bd4b3389970928be9/java_logo.png) center / cover' }}></CardTitle>
                    <CardText> Retrieve a class schedule using the following languages and concepts: Java, Regex.</CardText>

                    <CardActions border>
                        <Button colored href="https://github.com/Beverlyckh/Assignment1_RetrieveClassSchedule/tree/master/Assignment1_RetrieveClassSchedule" rel="noopener noreferrer" target="_blank">GitHub </Button>
                    </CardActions>

                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>
               
                )
            
        }
    }

    render() {
        return (
            <div>

                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab> MySql</Tab>
                    <Tab> React</Tab>
                    <Tab> Java</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid >

                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>




            </div>
        )
    }
}

export default Projects;
