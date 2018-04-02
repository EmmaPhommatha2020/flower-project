import React from 'react';

function FavFlowers(props) {
  console.log(props, 'props');
  const { statetext, title, text, img, id, updateText, removeFromFavFlower, handleChange } = props;

  return (
    <div className="display" >
      <h2>{title}</h2>
      <input type="text" onChange={(e) => handleChange(e)} name="text" />
      <button className="removebutton" onClick={() => updateText(statetext, id)}>Update</button>
      <p>{text}</p>
      <img src={img} alt='pic' />
      <button className="picbutton" onClick={() => removeFromFavFlower()}>Delete</button>
    </div>
  )
}

export default FavFlowers;