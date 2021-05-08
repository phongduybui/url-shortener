import React from 'react';

const Footer = ({ formRef }) => {     
    return (
        <footer className="footer">
            <h2 className="footer__title">Boost your links today</h2>
            <div 
                className="btn btn--rounded btn--large"
                onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
                <span>Get Started</span>
            </div>
        </footer>
    );
};

export default Footer;