import gql from "graphql-tag";

export async function req_getCompanies(q, get_Companies) {
  var { data } = await get_Companies({
    // variables: { uid: q.uid },
    variables: q,
  });
  return data;
}
