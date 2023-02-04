import gql from "graphql-tag";

// users  ***************************************************************************************************
export const GET_COMPANY_BY = gql`
  query ($uid: ID!) {
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

export const GET_COMPANIES_BY = gql`
  query ($uid: ID!) {
    companies {
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
