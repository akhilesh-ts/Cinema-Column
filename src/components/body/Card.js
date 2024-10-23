import React from 'react';
import { IMAGE_PATH} from '../../utils/constants';


const Card = ({poster}) => {
  return (
    <div className={`rounded-md w-52  flex-shrink-0 `}> 
    
        <img
        src={`${IMAGE_PATH}${poster }`}
        alt='Movie Poster'
        className='w-full h-auto rounded-lg'
      />
      
   

      
   
      
    </div>
  );
}

export default Card;