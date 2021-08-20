import React, {useEffect} from "react";
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

const Feed = () => {
    useEffect(() => {
        async function logic() {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        }

        logic();
    }, []);
    return <Text>FEED</Text>;
};

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Feed">
            <Tab.Screen name="Feed" component={Feed} />
        </Tab.Navigator>
    );
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={AppTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
