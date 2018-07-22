import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './index.scss';

const App = () => (
  <Query
    query={gql`
      {
        allCards {
          id
          name
          imageUrl
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading</h1>;
      if (error) return <h1>Error</h1>;

      return data.allCards.map(card => (
        <div>
          <h1>{card.name}</h1>
          <img src={card.imageUrl} alt={card.name} width="200" />
        </div>
      ));
    }}
  </Query>
);

module.exports = App;
