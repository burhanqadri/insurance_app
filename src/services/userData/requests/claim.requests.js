import gql from "graphql-tag";

export async function req_getUserClaims(q, get_userClaims) {
  var { data } = await get_User({
    variables: { uid: q.uid, serviceCoveredID: q.serviceCoveredID },
  });
  return data;
}

export async function req_createClaim(q, do_createClaim) {
  const newClaimData = await do_createClaim({
    variables: {
      uid: q.uid,
      // amount: q.amount,
      // reimbursementFiled: q.reimbursementFiled,
    },
  });
  return newClaimData;
}
