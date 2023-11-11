/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMms = /* GraphQL */ `
  query GetMms($id: ID!) {
    getMms(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMms = /* GraphQL */ `
  query ListMms($filter: ModelMmsFilterInput, $limit: Int, $nextToken: String) {
    listMms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
