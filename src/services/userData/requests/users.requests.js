import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

import gql from "graphql-tag";

export async function req_getUser(q, get_User) {
  var { data } = await get_User({
    variables: { uid: q.uid },
  });
  return data;
}

export async function req_createUser(q, do_createUser) {
  const newUserData = await do_createUser({
    variables: {
      uid: q.uid,
      // phone: ,
      // companies: ,
      // insurancePlans: ,
    },
  });
  return newUserData;
}
