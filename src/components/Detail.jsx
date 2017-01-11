import React from 'react';

import { getRandomQuote } from '../tools/quotes';

const Detail = (props) => {
  const quote = getRandomQuote();
  const { slug, data, showDetails, displayRelated } = props;

  const catIndex = data.findIndex(cat => cat.slug === slug);
  const catData = data[catIndex];
  const { age, gender, price, weight } = catData;

  const renderMiniView = () => {
    // We'll remove the hashes when we integrate react-router ;)
    const link = showDetails ? <span>{catData.name}</span> : <a href="#">{catData.name}</a>; // eslint-disable-line jsx-a11y/href-no-hash

    return (
      <div>
        <h4 className="card-title">{link}</h4>
        <h6 className="card-meta">{catData.breed}</h6>
        <img width="200" height="200" alt={catData.name} src={`https://placekitten.com/200/200?image=${Math.round(Math.random() * 16)}`} />
      </div>
    );
  };

  const renderDetailView = () => (
    <div>
      <div className="columns">
        <div className="column col-12">
          <div className="card">
            <div className="card-header">{renderMiniView()}</div>
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
      { displayRelated ? () => {
        const relatedProducts = data
            .filter(cat => cat.breed === catData.breed)
            .filter(cat => cat.slug !== catData.slug);

        return relatedProducts.length > 2 ? (
          <div>
            <h3>Related products</h3>
            <div className="columns">
              <Detail slug={relatedProducts[0].slug} data={data} showDetails={false} />
              <Detail slug={relatedProducts[1].slug} data={data} showDetails={false} />
              <Detail slug={relatedProducts[2].slug} data={data} showDetails={false} />
            </div>
          </div>
          ) : null;
      } : null }
    </div>
  );

  return showDetails ? renderDetailView() : <div className="column col-4">{renderMiniView()}</div>;
};

Detail.propTypes = {
  slug: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  displayRelated: React.PropTypes.bool,
  showDetails: React.PropTypes.bool,
};

Detail.defaultProps = {
  displayRelated: false,
  showDetails: true,
};

export default Detail;
