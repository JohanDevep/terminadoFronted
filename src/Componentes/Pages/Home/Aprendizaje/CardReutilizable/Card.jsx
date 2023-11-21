import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ imagen, descripcion }) {
    return (
        <div className="p-4">
            <div className="bg-slate-400 xl:w-72 md:max-w-sm w-full rounded-lg overflow-hidden p-4 shadow-lg px-5 border-2 border-slate-400">
                <img className="h-auto w-full md:h-[150px] md:w-[353px] object-contain" src={imagen} alt={descripcion} />
                <h3 className="text-[20px] md:text-[24px]">{descripcion}</h3>
            </div>
        </div>
    )
}

Card.propTypes = {
    descripcion: PropTypes.string.isRequired,
}