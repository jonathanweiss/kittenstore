import React from 'react';
import { Link } from 'react-router';

const renderProducts = products => (
  <div className="columns">
    <div className="column col-12">
      <h2>All &ldquo;{products[0].race}&rdquo; products</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((cat) => {
            const ageInWeeks = 10 + Math.round(Math.random() * 10);

            return (
              <tr key={cat.slug}>
                <td>{cat.name}</td>
                <td>{ageInWeeks} weeks</td>
                <td>{ageInWeeks * 3} oz</td>
                <td>${50 + Math.round(Math.random() * 100)}.99</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

const renderEmpty = (slug, type) => (
  <div className="columns">
    <div className="column col-12">
      <section className="empty">
        <i className="icon icon-baffled" />
        <p className="empty-title">No product found for category &ldquo;{slug}&rdquo;.</p>
        <p className="empty-meta">Try a different category.</p>
        <Link to={`/${type}`}>
          <button className="empty-action btn btn-primary">Browse for products</button>
        </Link>
      </section>
    </div>
  </div>
);

const List = (props) => {
  const slug = props.slug;
  const products = props.data.filter(product => product.raceSlug === slug);

  return products.length ? renderProducts(products) : renderEmpty(slug, props.type);
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default List;
