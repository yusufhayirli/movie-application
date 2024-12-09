import React from 'react';

interface Props {
    header : string;
}

const MovieHeader = ({header} : Props) => {
  return (
    <div className="movie-header">          
        <h1>{header}</h1>
    </div>
  );
}

export default MovieHeader;
