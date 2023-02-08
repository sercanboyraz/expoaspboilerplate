import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import UserStore from "../../stores/userStore";
import Stores from "../../stores/storeIdentifier";
import { TextInput, Text, Button } from 'react-native-paper';
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IUsersProps {
    userStore: UserStore
}

export interface IUsersState {
    data: string;
    token: string
}

@inject(Stores.UserStore)
@observer
class Users extends Component<IUsersProps, IUsersState>{
    state = {
        data: "ssss",
        token: ""
    }

    async componentDidMount() {
        await AsyncStorage.getItem('aspboilerplate:token').then((x: any) => {
            this.setState({ token: x })
        });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.data}</Text>
                <Text>{this.state.token}</Text>
                {/* <Text variant="displayLarge">Display Large</Text>
                <Text variant="displayMedium">Display Medium</Text>
                <Text variant="displaySmall">Display small</Text> */}

                <Text variant="headlineLarge">Headline Large</Text>
                <Text variant="headlineMedium">Headline Medium</Text>
                <Text variant="headlineSmall">Headline Small</Text>

                <Text variant="titleLarge">Title Large</Text>
                <Text variant="titleMedium">Title Medium</Text>
                <Text variant="titleSmall">Title Small</Text>

                <Text variant="bodyLarge">Body Large</Text>
                <Text variant="bodyMedium">Body Medium</Text>
                <Text variant="bodySmall">Body Small</Text>

                <Text variant="labelLarge">Label Large</Text>
                <Text variant="labelMedium">Label Medium</Text>
                <Text variant="labelSmall">Label Small</Text>
                <TextInput mode="outlined" label="Email" value={"datass"} accessibilityLabelledBy={undefined} accessibilityLanguage={undefined} />
                <Button onPress={() => { console.log("sercan"); this.setState({ data: "asdasd" }) }} >DIKLAAA</Button>
                <Button onPress={() => { AsyncStorage.clear() }} >Logout</Button>
            </View>
        );
    }
}
export default Users;
