import React from 'react'
import { useParams } from 'react-router-dom';

import FetctRecipeById from './FetctRecipeById';

const Detail = () => {
      const {id} = useParams();
     
  return (
    <div>
        <FetctRecipeById id={id} />
    </div>
  )
};

export default Detail;