import * as Notifications from "expo-notifications";

import {
  ADD_NEW_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/users.queries";

import {
  ADD_NEW_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/company.queries";

import {
  ADD_NEW_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/provider.queries";

import {
  ADD_NEW_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/claim.queries";

import { AppState, StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useRef, useState } from "react";
import { req_createUser, req_getUser } from "./requests/users.requests";
// import { req_createUser, req_getUser } from "./requests/company.requests";
// import { req_createUser, req_getUser } from "./requests/provider.requests";
// import { req_createUser, req_getUser } from "./requests/claim.requests";

import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

// ****************************************
export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  // const [get_User] = useLazyQuery(GET_USER_BY, {
  //   fetchPolicy: "network-only",
  // });
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
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // Useffect for when to update  *******************************************************************
  useEffect(() => {
    console.log("STARTING");
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("INSIDE RUNNING");
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  //
  // users
  //
  async function func_addUser() {
    return;
    // await req_addUser({ uid }, do_addHabit, do_addUser, curTime, curUser);

    // await Notifications.cancelAllScheduledNotificationsAsync();

    // await Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "Reminder",
    //     body: "Fill out your daily reflection",
    //   },
    //   trigger: { hour: 8, repeats: true },
    // });

    // await Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "Reminder",
    //     body: "Plan your next day",
    //   },
    //   trigger: { hour: 20, repeats: true },
    // });
  }

  async function func_getThisUser(save = true) {
    return;
    // const data = await req_getThisUser({ uid }, get_thisUser);
    // return data;
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

  return (
    <UserDataContext.Provider
      value={{
        func_addUser,
        func_getThisUser,
        func_updateUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
