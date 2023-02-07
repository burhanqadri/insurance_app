import gql from "graphql-tag";

// users  ***************************************************************************************************
export const GET_USER_BY = gql`
  query ($uid: ID!) {
    getUserBy(uid: $uid) {
      uid
      phone
      # companies {
      #   name
      # }
      # insurancePlans {
      #   name
      # }
      # claims {
      #   claimID
      # }
    }
  }
`;

export const CREATE_USER = gql`
  mutation (
    $uid: ID!
    $phone: String
    $companyIDs: [ID]
    $insurancePlanIDs: [ID]
  ) {
    createUser(
      input: {
        uid: $uid
        phone: $phone
        companyIDs: $companyIDs
        insurancePlanIDs: $insurancePlanIDs
      }
    ) {
      uid
      phone
      companies {
        name
      }
      insurancePlans {
        name
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation (
    $uid: ID!
    $phone: String
    $companyIDs: [ID]
    $insurancePlanIDs: [ID]
    $claimIDs: [ID]
  ) {
    updateUser(
      uid: $uid
      input: {
        phone: $phone
        companyIDs: $companyIDs
        insurancePlanIDs: $insurancePlanIDs
        claimIDs: $claimIDs
      }
    ) {
      uid
      phone
      companies {
        name
      }
      insurancePlans {
        name
      }
      claims {
        claimID
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($uid: ID!) {
    deleteUser(uid: $uid) {
      uid
    }
  }
`;
