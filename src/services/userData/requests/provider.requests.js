import gql from "graphql-tag";

export async function req_getProviders(q, get_Providers) {
  var { data } = await get_Providers({
    // variables: { uid: q.uid },
    variables: q,
  });
  return data;
}
