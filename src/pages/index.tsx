import React from 'react';
import Head from 'next/head';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { ARTICLE } from '../graphql/post/queries/allFindPost';

export default function Index() {
  const { loading, error, data } = useQuery(ARTICLE);
  console.log(data);

  if (loading) return <p>Loading ...</p>;

  if (error) return `Error! ${error.message}`;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.post.map((article) => (
        <React.Fragment key={article.id}>{article.title}</React.Fragment>
      ))}
    </div>
  );
}
