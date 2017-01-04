import React from 'react';

const renderProduct = (text, link, cb) => {
  return (
    <div key={link} className="product--item">
      <figure>
        <img src={cb()} alt={text} /> 
        <figcaption>{text}</figcaption>
      </figure>
    </div>
  );
}

const Category = props => {
  const cb = props.desc === 'Cats' ?
    () => `https://placekitten.com/200/200?image=${Math.round(Math.random() * 16)}` :
    () => `https://dummyimage.com/200x200/999/000.png`;

  return (
    <div>
      <h2>{props.desc}</h2>
      <div className="product--container">
        { props.items.map(entry => renderProduct(entry.text, entry.link, cb)) }
      </div>
    </div>
  );
};

Category.propTypes = {
  desc: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default Category;
