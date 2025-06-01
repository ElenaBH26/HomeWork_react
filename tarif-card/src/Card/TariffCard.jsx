import React from 'react';
import './TariffCard.css'

function TariffCards({title, price, speed, footer, headerColor, bodyColor, isHighlighted}) {

    const headerStyle = {
        backgroundColor: headerColor,
        color: 'white'
    };

    const bodyStyle = {
        backgroundColor: bodyColor,
        color: 'white'
    };

    

    return (
        <div className= {`tariff-card ${isHighlighted ? 'highlighted' : ''}`}>
            <div className='tariff-header' style={headerStyle}>
                <h3>{title}</h3>
            </div>
            <div className='tariff-body' style={bodyStyle}>
                <div className='price-container'>
                    <span className='currency top-left'>руб</span>
                        <span className='price'>{price}</span>
                            <span className='currency bottom-right'>мес</span>
                </div>
            </div>
            <div className='tariff-span'>
                <span>{speed}</span>
            </div>
            <div className='footer'>
                <p>{footer}</p>
            </div>    
        </div>
    );
}

export default TariffCards;