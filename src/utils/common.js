import React from 'react';

function renderStarsRating(rating){
  var floorRating = Math.floor(rating)
  var restRating = rating - floorRating
  var starAddingAttribute = [];

  for(var i = 0; i < 10; i++){
    if(i === floorRating && restRating >= 0.5) starAddingAttribute.push('-half-empty')
    else if(i === floorRating && restRating <= 0.5) starAddingAttribute.push('-o')
    else if(i > floorRating) starAddingAttribute.push('-o')
    else starAddingAttribute.push('')
  }
  return starAddingAttribute.map((attribute, index) => {
    return <i key={index} className={`fa fa-star${attribute} title is-5`} style={{color: "#ed6c63"}} />
  })
}

export {
  renderStarsRating
}
