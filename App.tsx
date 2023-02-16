import React, { useEffect } from "react";
import * as Notifications from 'expo-notifications';

import { PlantProps } from './src/libs/storage';
import Routes from "./src/routes";

import {
  useFonts,
  Mukta_400Regular,
  Mukta_600SemiBold
} from '@expo-google-fonts/mukta';
import AppLoading from "expo-app-loading/build/AppLoading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Mukta_400Regular,
    Mukta_600SemiBold
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();
  }, [])

  if (!fontsLoaded)
    return (<AppLoading />)

  return (
    <Routes />
  )
}