import React, { Component } from 'react';
import Card from '../Card/Card';

import './Database.css';
import Modal from '../Modal/Modal';

class Database extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({
            isModalOpen: true
        })
    }

    handleClose() {
        this.setState({
            isModalOpen: false
        })
    }


    render() {
        const database = "Please choose a name for your database";
        const createDatabase = "Create new database";

        return (
            <div className="database-container">
                <h2 className="database-title">Databases</h2>
                <div className="database-body">
                    <Card id={1} title="Database 1" subtitle="Created on: "/>
                    <Card id={2} title="Database 2" subtitle="Created on: "/>
                    <Card id={3} title="Database 3" subtitle="Created on: "/>
                    <Card handleModal={this.handleOpen}/>
                    <Modal 
                        isOpen={this.state.isModalOpen} 
                        title={database} 
                        handleClose={this.handleClose} 
                        createDatabase={createDatabase}
                    /> 
                </div>
            </div>
        );
    }
}

export default Database;