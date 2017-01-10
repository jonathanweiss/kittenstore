import React from 'react';
import { getRandomQuote } from '../tools/quotes';

const Detail = (props) => {
  const catIndex = props.data.findIndex(cat => cat.slug === props.slug);
  const catData = props.data[catIndex];
  const quote = getRandomQuote();

  const { age, gender, price, weight } = catData;

  return (
    <div className="columns">
      <div className="column col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{catData.name}</h4>
            <h6 className="card-meta">{catData.breed}</h6>
            <img width="200" height="200" alt={catData.name} src={`https://placekitten.com/200/200?image=${Math.round(Math.random() * 16)}`} />
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>{age} weeks</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{gender === 'male' ? '♂' : ' ♀'}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{weight}oz</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td><span className={`label ${price < 100 ? 'label-success' : 'label-danger'}`}>${price}</span></td>
                </tr>
              </tbody>
            </table>

            <p className="pt-10">
              <a href="/" className="btn btn-primary">Buy</a>
              <a href="/" className="btn btn-link">Share</a>
            </p>
          </div>
          <div className="card-footer">
            <blockquote>
              <p>{quote.text}</p>
              <cite>&ndash; {quote.person}</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  slug: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default Detail;
