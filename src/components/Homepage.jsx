import React from 'react';

import Detail from './Detail';

const Homepage = (props) => {
  const cats = props.products;
  const randomCats = [];

  const getRandomCat = () => {
    const index = Math.round(Math.random() * cats.length);
    return cats[index];
  };

  for (let i = 0; i < props.amountOfProducts; i += 1) {
    randomCats.push(getRandomCat());
  }

  return (
    <div>
      <div className="columns">
        <div className="column col-12">
          <h1>KittenStore</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {randomCats.map(cat => (
          <div className={`column col-${12 / props.amountOfProducts}`} key={cat.slug}>
            <Detail slug={cat.slug} data={cats} />
          </div>
        ))}
      </div>
    </div>
  );
};

Homepage.propTypes = {
  products: React.PropTypes.array,
  amountOfProducts: React.PropTypes.number,
};

export default Homepage;
