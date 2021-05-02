import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className="card">
            <div className="card__icon">
                <i className="icon history"></i>
            </div>
            <h3 className="card__title">Brand Recognition</h3>
            <p className="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem eum. Cumque, non atque tenetur tempora pariatur neque fuga voluptate.</p>
        </div>
    );
};

export default Card;