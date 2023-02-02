// //@collapse

// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useRef,
//     useState,
//   } from "react";
//   import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

//   import gql from "graphql-tag";

//   export async function req_getThisUser(q, get_thisUser) {
//     var { data } = await get_thisUser({
//       variables: { uid: q.uid },
//     });
//     return data;
//   }

//   export async function req_addUser(
//     q,
//     do_addHabit,
//     do_addUser,
//     curTime,
//     curUser
//   ) {
//     var exerciseDays = [];
//     try {
//       var stringExerciseDays = await AsyncStorage.getItem("EXERCISE_DAYS");
//       exerciseDays = JSON.parse(stringExerciseDays);
//     } catch (error) {
//       console.log("Error in user.requests: could not find exercide days stored");
//     }

//     const generatedProgressions = [
//       {
//         title: "Food habit",
//         currentProgression: "Track your cals",
//         whichDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       },
//       {
//         title: "Exercise habit",
//         currentProgression: "Drive to the gym",
//         whichDays: exerciseDays,
//       },
//       {
//         title: "Mind habit",
//         currentProgression: "Plan your next day",
//         whichDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       },
//     ];

//     // make new habits for the user
//     generatedProgressions.forEach(async function (thisNewHabit) {
//       await do_addHabit({
//         variables: {
//           uid: q.uid,
//           title: thisNewHabit.title,
//           currentProgression: thisNewHabit.currentProgression,
//           whichDays: thisNewHabit.whichDays,
//         },
//       });
//     });

//     // stringify the onboarding answers
//     var stringifiedOnboardingAnswers = [];

//     try {
//       curUser.onboardingAnswers.forEach(async function (thisAnswer) {
//         var thisAns = await JSON.stringify(thisAnswer);
//         stringifiedOnboardingAnswers.push(thisAns);
//       });
//     } catch (error) {
//       console.log("Error in users.requests trycatch onboardingAnswers", error);
//     }

//     // add the user
//     const newUserData = await do_addUser({
//       variables: {
//         uid: q.uid,
//         name: curUser.name,
//         email: curUser.email,
//         phone: curUser.phone,
//         reasons: curUser.reasons,
//         onboardingAnswers: stringifiedOnboardingAnswers,
//         accountabilityPhoneNumbers: curUser.accountabilityPhoneNumbers,
//         relapseAmount: curUser.relapseAmount,
//         nextMidnight: curTime.midnight,
//       },
//     });
//   }
