import React from 'react';

const Card = ({book}) => {
    return (
        <div>
            <img src='https://avatars.githubusercontent.com/u/65095033?v=4' alt=''/>
            <h2>{book.name}</h2>
            <p>{book.page}</p>
        </div>
    );
};

export default Card;