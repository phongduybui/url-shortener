import React from 'react';

const Card = ({iconName, title, desc}) => {     
    return (
        <div className="card">
            <div className="card__icon">
                <img src={iconName}></img>
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__desc">{desc}</p>
        </div>
    );
};

export default Card;