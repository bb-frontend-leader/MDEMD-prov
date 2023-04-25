import React from 'react';

import ContentBack from './styles';
import back from '../../assets/img/tour.png';

const TourButton = ({ onClick }) => {
	return (
		<ContentBack onClick={onClick}>
      <div style={{display: 'inline-flex', justifyContent:'center', 
                    alignItems:'center', fontFamily:'Dimbo',
                    fontSize:'20px'}}>
          <h1>Iniciar Tour</h1>
          <img src={back} alt="tour" style={{marginRight:'10px'}} />
      </div>
		</ContentBack>
	);
};

export default TourButton;
