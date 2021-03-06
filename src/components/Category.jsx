import React from 'react';

// We'll remove the hashes when we integrate react-router ;)
/* eslint-disable jsx-a11y/href-no-hash */
const renderProduct = (name, slug, type, provideImageSource) => (
  <div key={slug} className="product--item">
    <a href="#" key={`/${type}/${slug}`}>
      <figure>
        <img width="200" height="200" src={provideImageSource()} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </a>
  </div>
);
/* eslint-enable jsx-a11y/href-no-hash */

const Category = (props) => {
  const type = props.desc.toLowerCase().split(' ').join('');
  const provideImageSource = type === 'cats' ?
    index => `https://placekitten.com/200/200?image=${index}` :
    () => 'https://dummyimage.com/200x200/999/000.png';

  return (
    <div className="columns">
      <h2>{props.desc}</h2>
      <div className="product--container">
        { props.items.map((entry, index) => renderProduct(entry.name, entry.slug, type, provideImageSource.bind(this, index))) }
      </div>
    </div>
  );
};

Category.propTypes = {
  desc: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default Category;
