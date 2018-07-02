import React from 'react';

class Details extends React.Component {
  render() {
    console.log(this.props.search)

    return (
      <div>
        {this.props.search ?
          (
          <div>
            <h3>{this.props.search.name} </h3>
            <p>rating: {this.props.search.rating.average}</p>
          </div>
          )
        : null}
      </div>
    )
  }

}

export default Details;
