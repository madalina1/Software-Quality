import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
    const images=require(`../../assets/wallpapers/${props.id ? props.id : '1'}.jpg`)
    const backgroundStyle = {
        backgroundImage: `url(${images})`
    }

    return (
        <React.Fragment>
            {
                props.title ?
                    <div className="card-container" style= { backgroundStyle }>
                        <Link to={`/${props.title.toLowerCase().replace(/\s+/g, '')}${props.link ? props.link : '/'}`}>
                            <div className="overlay"></div>
                            <h4 className="card-title">{props.title}</h4>
                            <h5 className="card-subtitle">{props.subtitle}</h5>
                            <button className="delete-database">x</button>    
                        </Link>               
                    </div>
                :
                <button className="card-plus" onClick={props.handleModal}>
                    <div className="add-database">+</div>                
                </button>
            } 
        </React.Fragment>
    );
}

export default Card;