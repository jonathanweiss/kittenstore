import React from 'react';
import { Link } from 'react-router';

const renderProduct = (text, link, type, provideImageSource) => (
  <div key={link} className="product--item">
    <Link to={`/${type}/${link}`}>
      <figure>
        <img width="200" height="200" src={provideImageSource()} alt={text} />
        <figcaption>{text}</figcaption>
      </figure>
    </Link>
  </div>
);

const Category = (props) => {
  const type = props.desc.toLowerCase().split(' ').join('');
  const provideImageSource = type === 'cats' ?
    () => `https://placekitten.com/200/200?image=${Math.round(Math.random() * 16)}` :
    () => 'https://dummyimage.com/200x200/999/000.png';

  return (
    <div className="columns">
      <h2>{props.desc}</h2>
      <div className="product--container">
        { props.items.map(entry => renderProduct(entry.text, entry.link, type, provideImageSource)) }
      </div>
    </div>
  );
};

Category.propTypes = {
  desc: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default Category;
