import React from 'react';
import image from '../../assets/dice-long.jpg';

function HeroImage() {
    return (
        <div className="hero-image">
            <img src={image} alt="" className="Dice" style={{ width: '100%', height: '120px', objectFit: "cover", marginTop: '2em', marginBottom: '0', opacity: '0.45'}}/>
        </div>
    )
}

export default HeroImage;