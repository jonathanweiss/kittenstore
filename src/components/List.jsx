import React from 'react';

const List = (props) => {
  const slug = props.slug;
  const cats = props.data.filter(cat => cat.raceSlug === slug);

  return (
    <div className="columns">
      <div className="column col-12">
        <h2>All &ldquo;{cats[0].race}&rdquo; cats</h2>
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
            {cats.map((cat) => {
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
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default List;
