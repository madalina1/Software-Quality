import React, { Component } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

import './Table.css';
import Modal from '../Modal/Modal';

class Table extends Component {
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
        const Table = "Please choose a name for your Table";
        const createTable = "Create new Table";

        return (
            <div className="table-container">
                <Link to={'/database'} className="table-title-container">
                    <i className="fas fa-chevron-left"></i>
                    <h2 className="table-title">Tables</h2>
                </Link>
                <div className="table-body">
                    <Card id={4} title="Table 1" subtitle="Please select to see all columns"/>
                    <Card id={5} title="Table 2" subtitle="Please select to see all columns"/>
                    <Card id={6} title="Table 3" subtitle="Please select to see all columns"/>
                    <Card handleModal={this.handleOpen}/>
                    <Modal 
                        isOpen={this.state.isModalOpen} 
                        title={Table} 
                        handleClose={this.handleClose} 
                        createTable={createTable}
                    /> 
                </div>
            </div>
        );
    }
}

export default Table;