// check if the user doesn't have an account but clicked the I have an account button (do this on the phone)
//@collapse

import * as Notifications from "expo-notifications";
import {
  ADD_NEW_USER,
  GET_USER_BY,
  UPDATE_USER,
} from "./queries/users.queries";
import { AppState, StyleSheet, Text, View } from "react-native";
import { req_addUser, req_getThisUser } from "./requests/users.requests";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";

// ****************************************
export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [get_thisUser] = useLazyQuery(GET_USER_BY, {
    fetchPolicy: "network-only",
  });
  const [do_addUser, {}] = useMutation(ADD_NEW_USER);
  const [do_updateUser, {}] = useMutation(UPDATE_USER);

  // ************************************************************************************************
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // Useffect for when to update  *******************************************************************
  useEffect(() => {
    console.log("STARTING);
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
    await req_addUser({ uid }, do_addHabit, do_addUser, curTime, curUser);

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
    const data = await req_getThisUser({ uid }, get_thisUser);
    return data;
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
