import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import UserStore from "../../stores/userStore";
import Stores from "../../stores/storeIdentifier";

export interface IUsersProps {
    userStore: UserStore
}

export interface IUsersState {
    data: string;
}

@inject(Stores.UserStore)
@observer
class Users extends Component<IUsersProps, IUsersState>{
    state = {
        data: "ssss"
    }
    render() {
        // const { count, increment } = this.props.userStore;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.data}</Text>
                <Button title="Dıkladınmı" onPress={() => { console.log("sercan"); this.setState({ data: "asdasd" }) }} />
            </View>
        );
    }
}
export default Users;
