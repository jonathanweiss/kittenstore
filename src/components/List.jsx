import React from 'react';

const headers = ['Name', 'Age', 'Weight', 'Gender', 'Price'];

const List = (props) => {
  const { slug, type, sortedBy, sortDirection } = props;
  let products = props.data.filter(product => product.breedSlug === slug);

  const renderHeader = (text, direction) => (
    <th key={text}>
      <span>{text}</span>
      {text.toLowerCase() === sortedBy ? <span className={`icon icon-arrow-${direction}2`} /> : null}
    </th>
  );

  const renderProducts = () => (
    <div className="columns">
      <div className="column col-12">
        <h2>All &ldquo;{products[0].breed}&rdquo;</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {headers.map(text => renderHeader(text, sortedBy, sortDirection === 'desc' ? 'down' : 'up'))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const { age, weight, gender, price } = product;

              return (
                <tr key={product.slug}>
                  <td>{product.name}</td>
                  <td>{age} weeks</td>
                  <td>{weight} oz</td>
                  <td>{gender === 'male' ? '♂' : ' ♀'}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEmpty = () => (
    <div className="columns">
      <div className="column col-12">
        <section className="empty">
          <i className="icon icon-baffled" />
          <p className="empty-title">No product found for category &ldquo;{slug}&rdquo;.</p>
          <p className="empty-meta">Try a different category.</p>
          <button className="empty-action btn btn-primary">Browse for products</button>
        </section>
      </div>
    </div>
  );


  if (sortedBy) {
    products = products.sort((a, b) => {
      const trueValue = sortDirection === 'desc' ? -1 : 1;
      const falseValue = sortDirection === 'desc' ? 1 : -1;

      return a[props.sortedBy] > b[props.sortedBy] ? trueValue : falseValue;
    });
  }

  return products.length ? renderProducts(products, sortedBy, sortDirection) : renderEmpty(slug, type);
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  sortedBy: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
};

List.contextTypes = {
  location: React.PropTypes.object,
};

export default List;
