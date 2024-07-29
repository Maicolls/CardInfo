import React from "react";
import Screen from "./Screen";
import { NavigationProp } from '@react-navigation/native';


interface ScreenProps {
  navigation: NavigationProp<any>;
}

export const ProfileScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="Profile" />
);

export const MessageScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="Message" />
);

export const ActivityScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="Activity" />
);

export const ListScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="List" />
);

export const ReportScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="Report" />
);

export const StatisticScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="Statistic" />
);

export const SingOutScreen: React.FC<ScreenProps> = ({ navigation }) => (
  <Screen navigation={navigation} name="SingOut" />
);