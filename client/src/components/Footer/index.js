
import React from 'react';
import redDice from '../../assets/red-dice.png';
import redDice2 from '../../assets/red-dice-2.png';

function Footer() {
    const footer = {
        marginTop: '100rem',
        padding: '1rem',
        backgroundColor: '#555',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
      };
    return (
      <div className="footer" style={footer}>
        <p>
          <img
            className="dice"
            src={redDice}
            alt="red dice"
            style={{
              width: 50,
              height: 50,
              objectFit: 'none',
              float: 'left',
              //   marginLeft: '8rem',
              //   marginTop: '2rem',
            }}
          />
          <img
            className="dice-two"
            src={redDice2}
            alt="red dice two"
            style={{
              width: 50,
              height: 50,
              objectFit: 'none',
              float: 'right',
            //   marginLeft: '0.5rem',            
            }}
          />
        </p>
      </div>
    );
  }
  
  export default Footer;