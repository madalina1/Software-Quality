import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Crud.css';
import { Table, FullWidthButton } from './ForTable';

class Crud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addMode: false
        };
        this.handleAddClick = this.handleAddClick.bind(this);
        this.getData();
    }

    handleAddClick() {
        this.setState({ addMode: true });
    }

    getData() {
        console.log("AJAX GET");
    }


    render() {
        const history = `/${this.props.match.url.split('/')[1]}`;
        if (this.state.addMode) {
            var instance = {};
            data.fielddata.forEach(function (fd) {
                instance[fd.name] = "";
            });
            var dataout = data;
            dataout.instances.push(instance);
        }
        else {
            dataout = data;
        }
        if (dataout.instances.length > 0) {

        }

        return (
            <div className="crud-container">
                <Link to={history} className="crud-title-container">
                    <i className="fas fa-chevron-left"></i>
                    <h2 className="crud-title">Table 1</h2>
                </Link>

                <Table data={dataout} />
                <br />
                <FullWidthButton buttontext={"Add Case"} onClick={this.handleAddClick} />
            </div>
        );
    }
}

const data = {
    "api_uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/",
    "fielddata": [{
      "header": "Case Ref.",
      "inputfield": true,
      "length": 10,
      "name": "caseref",
      "placeholder": "e.g. E1234.EP"
    }, {
      "header": "Application No.",
      "inputfield": true,
      "length": 10,
      "name": "appln_no",
      "placeholder": "e.g. XX...X.X"
    }, {
      "header": "Country",
      "inputfield": true,
      "length": 7,
      "name": "countrycode",
      "placeholder": "e.g. EP"
    }, {
      "header": "Last Modified",
      "inputfield": false,
      "length": 10,
      "name": "date_modified",
      "placeholder": ""
    }],
    "instances": [{
      "appln_no": "12881603.0",
      "caseref": "R1234.W#",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=2"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=2"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=2"
      }],
      "countrycode": "EP",
      "date_created": "04 July 2016",
      "date_modified": "04 July 2016",
      "filing_date": null,
      "id": 2,
      "pub_date": "03 June 2015",
      "pub_no": "EP2877953",
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/2"
    }, {
      "appln_no": "79300903.6",
      "caseref": "E1234.EP#",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=1"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=1"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=1"
      }],
      "countrycode": "EP",
      "date_created": "01 June 2016",
      "date_modified": "11 July 2016",
      "filing_date": null,
      "id": 1,
      "pub_date": null,
      "pub_no": null,
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/1"
    }, {
      "appln_no": "1324250.1",
      "caseref": "Exxxxx.EP",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=3"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=3"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=3"
      }],
      "countrycode": "EP",
      "date_created": "11 November 2016",
      "date_modified": "11 November 2016",
      "filing_date": null,
      "id": 3,
      "pub_date": null,
      "pub_no": null,
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/3"
    }]
  };

export default Crud;