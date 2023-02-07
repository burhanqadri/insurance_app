import gql from "graphql-tag";

export const GET_PROVIDERS_BY = gql`
  query (
    $providerID: ID
    $latitude: String
    $longitude: String
    $acceptingNew: Boolean
    $virtualAvailable: Boolean
    $reimbursementHandling: Boolean
    $limit: Int
  ) {
    provider(
      providerID: $providerID
      latitude: $latitude
      longitude: $longitude
      acceptingNew: $acceptingNew
      virtualAvailable: $virtualAvailable
      reimbursementHandling: $reimbursementHandling
      limit: $limit
    ) {
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
