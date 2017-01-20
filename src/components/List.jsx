import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const headers = ['Name', 'Age', 'Weight', 'Gender', 'Price'];

const renderHeader = (text, sortedBy, direction) => {
  const value = text.toLowerCase();
  const arrowName = direction === 'desc' ? 'down' : 'up';
  let sortDirection;

  if (value === sortedBy) {
    sortDirection = direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortDirection = 'asc';
  }

  return (
    <th key={value}>
      <Link to={`?sortedBy=${value}&sortDirection=${sortDirection}`}>{text}</Link>
      {value === sortedBy ? <span className={`icon icon-arrow-${arrowName}2`} /> : null}
    </th>
  );
};

const renderProducts = (products, pathname, sortedBy, sortDirection) => (
  <div className="columns">
    <div className="column col-12">
      <h2>All &ldquo;{products[0].breed}&rdquo;</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {headers.map(text => renderHeader(text, sortedBy, sortDirection))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { age, weight, gender, price } = product;

            return (
              <tr key={product.slug}>
                <td><Link to={`${pathname}/${product.slug}`}>{product.name}</Link></td>
                <td>{age} weeks</td>
                <td>{weight} oz</td>
                <td>{gender === 'male' ? '♂' : '♀'}</td>
                <td>${price}</td>
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
  const { slug, type, sortedBy, sortDirection, pathname } = props;
  let products = props.data.filter(product => product.breedSlug === slug);

  if (sortedBy) {
    products = products.sort((a, b) => {
      const trueValue = sortDirection === 'desc' ? -1 : 1;
      const falseValue = sortDirection === 'desc' ? 1 : -1;

      return a[props.sortedBy] > b[props.sortedBy] ? trueValue : falseValue;
    });
  }

  return products.length ? renderProducts(products, pathname, sortedBy, sortDirection) : renderEmpty(slug, type);
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  sortedBy: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps)(List);
