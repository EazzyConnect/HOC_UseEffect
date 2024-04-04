import React from 'react'

const Card = ({name, avatar, createdAt}) => {
  return (
    <>
    <div>
        <img src={avatar} alt="img" />
        <div>
            <h3>{name}</h3>
            <p>{createdAt}</p>
        </div>
    </div>
    </>
  )
};

export default Card;