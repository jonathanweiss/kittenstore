import React from 'react';

const List = (props) => {
  const term = props.term;
  const cats = props.data.filter(cat => cat.name.indexOf(term) !== -1);

  const renderEmpty = () => (
    <section className="empty">
      <i className="icon icon-search" />
      <p className="empty-title">No results for search term &ldquo;{term}&rdquo;</p>
      <p className="empty-meta">Try something different</p>
      <div className="input-group input-inline">
        <input className="form-input" type="text" placeholder="search" />
        <button className="btn btn-primary input-group-btn">Search</button>
      </div>
    </section>
  );

  const renderList = () => (
    <div className="columns">
      <div className="column col-12">
        <h2>Search results for &ldquo;{term}&rdquo;</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Race</th>
              <th>Age</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => {
              const ageInWeeks = 10 + Math.round(Math.random() * 10);
              const nameParts = cat.name.split(term);

              return (
                <tr key={cat.slug}>
                  <td>{nameParts[0]}<span className="highlight">{term}</span>{nameParts[1]}</td>
                  <td>{cat.race}</td>
                  <td>{ageInWeeks} weeks</td>
                  <td>{ageInWeeks * 3} oz</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    );

  return cats.length ? renderList() : renderEmpty();
};

List.propTypes = {
  term: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default List;
