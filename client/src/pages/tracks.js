import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client'
import TrackCard from '../containers/track-card'
import QueryResult from "../components/query-result"
const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `ERROR! ${error.message}`;

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard key={track.id} track={track}/>
            ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
