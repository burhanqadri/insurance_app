import * as Notifications from "expo-notifications";

import {
  CREATE_CLAIM,
  DELETE_CLAIM,
  GET_CLAIMS_BY,
  GET_CLAIM_BY,
  UPDATE_CLAIM,
} from "./queries/claim.queries";
import { CREATE_USER, GET_USER_BY, UPDATE_USER } from "./queries/users.queries";
import { GET_COMPANIES_BY, GET_COMPANY_BY } from "./queries/company.queries";
import { GET_PROVIDERS_BY, GET_PROVIDER_BY } from "./queries/provider.queries";
import React, { createContext, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  req_createClaim,
  req_getClaim,
  req_getClaims,
} from "./requests/claim.requests";
import { req_createUser, req_getUser } from "./requests/users.requests";
import { req_getCompanies, req_getCompany } from "./requests/company.requests";
import {
  req_getProvider,
  req_getProviders,
} from "./requests/provider.requests";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

// ****************************************
export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [appUser, setAppUser] = useState({ uid: "" });
  const [get_User] = useLazyQuery(GET_USER_BY, {
    fetchPolicy: "network-only",
  });
  // const [do_createUser, {}] = useMutation(CREATE_USER);
  // const [do_updateUser, {}] = useMutation(UPDATE_USER);

  // const [get_Company] = useLazyQuery(GET_COMPANY_BY, {
  //   fetchPolicy: "network-only",
  // });
  // const [get_AllCompanies] = useLazyQuery(GET_COMPANIES_BY, {
  //   fetchPolicy: "network-only",
  // });

  // const [get_Provider] = useLazyQuery(GET_PROVIDER_BY, {
  //   fetchPolicy: "network-only",
  // });
  // const [get_Providers] = useLazyQuery(GET_PROVIDERS_BY, {
  //   fetchPolicy: "network-only",
  // });

  // const [get_Claim] = useLazyQuery(GET_CLAIM_BY, {
  //   fetchPolicy: "network-only",
  // });
  // const [get_Claims] = useLazyQuery(GET_CLAIMS_BY, {
  //   fetchPolicy: "network-only",
  // });
  // const [do_createClaim, {}] = useMutation(CREATE_CLAIM);
  // const [do_updateClaim, {}] = useMutation(UPDATE_CLAIM);

  // ************************************************************************************************
  //
  // users
  //
  async function func_getUser(thisUid) {
    console.log("received call, ", thisUid);
    var data;
    try {
      data = await req_getUser({ uid: thisUid }, get_User);
    } catch (error) {
      console.log("ERROR", error);
    }
    console.log("DATA", data);
    return data;
  }

  async function func_createUser() {
    return;
    // await req_addUser({ uid }, do_addHabit, do_createUser, curTime, curUser);
  }
  async function func_updateUser(userFilter) {
    return;
    // try {
    //   await do_updateUser({
    //     variables: { uid, ...userFilter },
    //   });
    // } catch (error) {
    //   console.log("ERROR in updateUser", error);
    // }

    // //refetch user
    // await func_getThisUser();
  }
  //
  // company
  //
  async function func_getCompany(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_getCompanies(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  //
  // provider
  //
  async function func_getProvider(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_getProviders(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  //
  // claim
  //
  async function func_createClaim(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_updateClaim(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_deleteClaim(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_getClaim(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_getClaims(save = true) {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }

  return (
    <UserDataContext.Provider
      value={{
        appUser,
        setAppUser,
        //
        func_createUser,
        func_getUser,
        func_updateUser,
        //
        func_getCompany,
        func_getCompanies,
        //
        func_getProviders,
        func_getProviders,
        //
        func_createClaim,
        func_getClaim,
        func_getClaims,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
