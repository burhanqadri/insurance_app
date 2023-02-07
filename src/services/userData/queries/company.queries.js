import gql from "graphql-tag";

export const GET_COMPANIES_BY = gql`
  query ($companyID: ID!) {
    company(companyID: $companyID) {
      companyID
      name
      logo
      location
      insurancePlans {
        name
      }
    }
  }
`;
