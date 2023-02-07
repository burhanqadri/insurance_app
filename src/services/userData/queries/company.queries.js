import gql from "graphql-tag";

export const GET_COMPANIES_BY = gql`
  query ($companyID: ID, name: String) {
    company(companyID: $companyID, name: $name) {
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
