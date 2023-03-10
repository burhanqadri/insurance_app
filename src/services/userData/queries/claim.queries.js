import gql from "graphql-tag";

export const GET_USER_CLAIMS_BY = gql`
  query ($uid: ID!, $serviceCoveredID: ID) {
    getClaims(uid: $uid, serviceCoveredID: $serviceCoveredID) {
      claimID
      user {
        name
      }
      amount
      date
      reimbursementFiled
      reimbursementReceived
      serviceCovered {
        name
      }
    }
  }
`;

export const CREATE_CLAIM = gql`
  mutation (
    $claimID: ID!
    $uid: ID!
    $date: String!
    $amount: Float
    $reimbursementFiled: Boolean
    $reimbursementReceived: Boolean
    $serviceCoveredID: String!
  ) {
    createClaim(
      input: {
        uid: $uid
        amount: $amount
        date: $date
        reimbursementFiled: $reimbursementFiled
        reimbursementReceived: $reimbursementReceived
        serviceCoveredID: $serviceCoveredID
      }
    ) {
      claimID
      user {
        name
      }
      amount
      date
      reimbursementFiled
      reimbursementReceived
      serviceCovered {
        name
      }
    }

    addClaimToUser(claimID: $claimID, uid: $uid) {
      claimID
      user {
        name
      }
      amount
      date
      reimbursementFiled
      reimbursementReceived
      serviceCovered {
        name
      }
    }
  }
`;
export const UPDATE_CLAIM = gql`
  mutation (
    $claimID: ID!
    $date: String
    $amount: Float
    $reimbursementFiled: Boolean
    $reimbursementReceived: Boolean
    $serviceCoveredID: String
  ) {
    updateClaim(
      claimID: $claimID
      input: { amount: $amount, reimbursementReceived: $reimbursementReceived }
    ) {
      claimID
      user {
        name
      }
      amount
      date
      reimbursementFiled
      reimbursementReceived
      serviceCovered {
        name
      }
    }
  }
`;

export const DELETE_CLAIM = gql`
  mutation ($claimID: ID!) {
    deleteClaim(claimID: $claimID) {
      claimID
    }
  }
`;
