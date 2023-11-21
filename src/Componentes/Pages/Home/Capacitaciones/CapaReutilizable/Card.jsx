import React from 'react'
import PropTypes from 'prop-types';
export default function Card({ imagen, descripcion }) {
    return (
        <div>
            <div className="p-7 flex flex-col gap-4 items-center xl:w-60 rounded-lg overflow-hidden shadow-lg border-2 border-gray-100">
                <img className="h-40 w-25" src={imagen} alt={descripcion} />
                <h3 className="text-center">{descripcion}</h3>
            </div>
        </div>
    )
}
Card.propTypes = {
    descripcion: PropTypes.string.isRequired,
}