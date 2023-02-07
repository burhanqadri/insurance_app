import gql from "graphql-tag";

export const GET_PROVIDERS_BY = gql`
  query ($providerID: ID!) {
    provider(providerID: $providerID) {
      name
      phone
      email
      website
      description
      address
      latitude
      longitude
      acceptingNew
      virtualAvailable
      reimbursementHandling
      insuranceCompaniesCompatible {
        name
      }
      servicesCoveredName
    }
  }
`;
