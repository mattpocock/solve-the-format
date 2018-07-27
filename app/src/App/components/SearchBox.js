import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  shouldComponentUpdate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.searchText}
          onChange={({ target }) =>
            this.setState({ searchText: target.value })
          }
        />
        {this.state.searchText !== '' && (
          <Query
            query={gql`
          {
            cardsByName(name: "${this.state.searchText}") {
              id
              name
            }
          }
        `}
          >
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading</h1>;
              if (error) return <h1>Error</h1>;
              if (data.cardsByName.length === 0) {
                console.log(data);
                return <h1>Could Not Find</h1>;
              }

              return (
                <ul>
                  {data.cardsByName.map(card => <li>{card.name}</li>)}
                </ul>
              );
            }}
          </Query>
        )}
      </React.Fragment>
    );
  }
}

export default SearchBox;
