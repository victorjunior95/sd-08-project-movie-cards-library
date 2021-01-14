import React from 'react';

function Rating(movies) {
  return (
    <div>
      <p className="rating">
        { movies.rating }
      </p>
    </div>
  );
}

export default Rating;
