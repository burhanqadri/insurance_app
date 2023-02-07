import * as Notifications from "expo-notifications";

import {
  CREATE_CLAIM,
  DELETE_CLAIM,
  GET_USER_CLAIMS_BY,
  UPDATE_CLAIM,
} from "./queries/claim.queries";
import {
  CREATE_USER,
  DELETE_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/users.queries";
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

import { GET_COMPANIES_BY } from "./queries/company.queries";
import { GET_PROVIDERS_BY } from "./queries/provider.queries";

// ****************************************
export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [appUser, setAppUser] = useState({
    uid: "",
    phone: "",
    companies: [],
    insurancePlans: [],
    claims: [],
  });

  //users
  const [get_User] = useLazyQuery(GET_USER_BY, {
    fetchPolicy: "network-only",
  });
  const [do_createUser, {}] = useMutation(CREATE_USER);
  const [do_updateUser, {}] = useMutation(UPDATE_USER);
  const [do_deleteUser, {}] = useMutation(DELETE_USER);

  //companies
  const [get_AllCompanies] = useLazyQuery(GET_COMPANIES_BY, {
    fetchPolicy: "network-only",
  });

  //providers
  const [get_Providers] = useLazyQuery(GET_PROVIDERS_BY, {
    fetchPolicy: "network-only",
  });

  //claims
  const [get_Claims] = useLazyQuery(GET_USER_CLAIMS_BY, {
    fetchPolicy: "network-only",
  });
  const [do_createClaim, {}] = useMutation(CREATE_CLAIM);
  const [do_updateClaim, {}] = useMutation(UPDATE_CLAIM);
  const [do_deleteClaim, {}] = useMutation(DELETE_CLAIM);

  // ************************************************************************************************
  //
  // users
  //
  async function func_getUser(thisUid) {
    console.log("received call, ", thisUid);
    var data;
    try {
      data = await req_getUser({ uid: thisUid }, get_User);
      // setAppUser({})
    } catch (error) {
      console.log("ERROR", error);
    }
    console.log("DATA", data);
    return data;
  }

  async function func_createUser(thisUid) {
    await req_addUser(
      {
        uid: thisUid,
        // phone: appUser.phone,
        // companies: appUser.companies,
        // insurancePlans: appUser.insurnacePlans,
      },
      do_createUser
    );
  }

  async function func_updateUser(userFilter) {
    try {
      await do_updateUser({
        variables: { uid, ...userFilter },
      });
    } catch (error) {
      console.log("ERROR in updateUser", error);
    }

    //refetch user
    // await func_getUser();
    // OR
    // could set the user here again based on what's returned from the update function!!!!
  }
  //
  // company
  //
  async function func_getCompanies() {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  //
  // provider
  //
  async function func_getProviders() {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  //
  // claim
  //
  async function func_getClaims() {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_createClaim() {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_updateClaim() {
    return;
    // const data = await req_getUser({ uid }, get_User);
    // return data;
  }
  async function func_deleteClaim() {
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
        func_getUser,
        func_createUser,
        func_updateUser,
        // func_deleteUser,
        //
        func_getCompanies,
        //
        func_getProviders,
        //
        func_createClaim,
        func_updateClaim,
        func_deleteClaim,
        func_getClaims,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
