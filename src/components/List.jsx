import React from 'react';

const headers = ['Name', 'Age', 'Weight', 'Price'];

const renderHeader = (text, sortedBy, direction) => (
  <th key={text}>
    <span>{text}</span>
    {text.toLowerCase() === sortedBy ? <span className={`icon icon-arrow-${direction}2`} /> : null}
  </th>
);

const List = (props) => {
  const { slug, sortedBy, sortDirection } = props;
  let cats = props.data.filter(cat => cat.breedSlug === slug);

  if (props.sortedBy) {
    cats = cats.sort((a, b) => {
      const trueValue = sortDirection === 'desc' ? -1 : 1;
      const falseValue = sortDirection === 'desc' ? 1 : -1;

      return a[props.sortedBy] > b[props.sortedBy] ? trueValue : falseValue;
    });
  }

  return (
    <div className="columns">
      <div className="column col-12">
        <h2>All &ldquo;{cats[0].breed}&rdquo; cats</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {headers.map(text => renderHeader(text, sortedBy, sortDirection === 'desc' ? 'down' : 'up'))}
            </tr>
          </thead>
          <tbody>
            {cats.map(cat => (
              <tr key={cat.slug}>
                <td>{cat.name}</td>
                <td>{cat.age} weeks</td>
                <td>{cat.weight} oz</td>
                <td>${cat.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  sortedBy: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
};

export default List;
