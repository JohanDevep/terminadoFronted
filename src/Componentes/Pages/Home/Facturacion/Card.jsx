import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ descripcion, viñeta }) {
  return (
    <div className="border-x-2 border-l-[#c7c6c6] border-solid p-4 md:p-8">
      <div className="flex items-center mb-3">
        <div className="mr-2 text-5xl">&#8226;</div> {/* &#8226; es la entidad HTML para el punto negro (•) */}
        <h3 className="text-left text-[#412a56] text-2xl md:text-lg">{descripcion}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  descripcion: PropTypes.string.isRequired,
  viñeta: PropTypes.string.isRequired,
};
