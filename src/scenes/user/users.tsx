import { inject, observer } from "mobx-react";
import React from "react";
import { View, Text, Button } from "react-native";
import { useUserStore, UserStoreContext, userStore } from '../../stores/userStore';
import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from 'react-native-navigation';

async function hydrateStores() {
    const hydrate = create({ storage: AsyncStorage });
    await hydrate('UserStore', userStore);
}

function Users() {
    const { count, delayMessage, increment } = useUserStore();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{delayMessage}</Text>
            <Text>{count}</Text>
            <Button title="Dıkladınmı" onPress={increment} />
        </View>
    );
}

Navigation.events().registerAppLaunchedListener(() => {
    hydrateStores().then(() => {
        Users();
    });
});

export default Users;
