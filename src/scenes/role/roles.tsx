import React from "react";
import { View, Text, Button } from "react-native";

export default function Roles({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}