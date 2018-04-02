import React from 'react';
// import './App.css'

function Flowers(props) {
  // console.log('props in Flowers COMP', props)
  const { title, text, img, id, addToFavFlowers } = props;
  return (
    <div className="container">
      <div className="display">
        <h2>{title}</h2>
        <p> {text} </p>
        <img src={img} alt='pic' />
        <button className="picbutton" onClick={() => { addToFavFlowers(id) }}>Add</button>
      </div>
    </div>
  )
}

export default Flowers;