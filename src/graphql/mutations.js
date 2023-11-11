/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMms = /* GraphQL */ `
  mutation CreateMms(
    $input: CreateMmsInput!
    $condition: ModelMmsConditionInput
  ) {
    createMms(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMms = /* GraphQL */ `
  mutation UpdateMms(
    $input: UpdateMmsInput!
    $condition: ModelMmsConditionInput
  ) {
    updateMms(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMms = /* GraphQL */ `
  mutation DeleteMms(
    $input: DeleteMmsInput!
    $condition: ModelMmsConditionInput
  ) {
    deleteMms(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
