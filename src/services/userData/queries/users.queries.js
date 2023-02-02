import gql from "graphql-tag";

// users  ***************************************************************************************************
export const GET_USER_BY = gql`
  query ($uid: ID!) {
    thisUser: getUserBy(uid: $uid) {
      uid
      name
      email
      phone
    }
  }
`;

export const ADD_NEW_USER = gql`
  mutation ($uid: ID!, $name: String!, $email: String, $phone: String!) {
    addNewUser(uid: $uid, name: $name, email: $email, phone: $phone) {
      uid
    }
  }
`;
export const UPDATE_USER = gql`
  mutation ($uid: ID!, $name: String, $email: String, $phone: String) {
    updateUser(uid: $uid, name: $name, email: $email, phone: $phone) {
      uid
    }
  }
`;
