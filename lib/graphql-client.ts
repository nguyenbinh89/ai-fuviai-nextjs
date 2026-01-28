import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.fuviai.com/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to fetch data with error handling
export async function fetchAPI(query: string, variables = {}) {
  try {
    const data = await graphQLClient.request(query, variables);
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
}
