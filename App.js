import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Appearance, Image, useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Dashboard from './src/scenes/dashboard/dashboards';
import Users from './src/scenes/user/users';
import Roles from './src/scenes/role/roles';
import { appRouters, userRouters } from './src/components/routers/router.config';
import { screenOptionsStyle } from './src/style/styles';
import { Provider } from 'mobx-react';
import UserStore from './src/stores/userStore';
import initializeStores from './src/stores/storeInitializer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { theme } from './src/core/theme'

function HeaderLogo({ title }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/favicon.png')}
      />
      <Text style={{ color: 'white', padding: 5, fontSize: 22 }}>{title}</Text>
    </View>
  );
}


const getToken = AsyncStorage.getItem('aspboilerplate:token');
const getUserId = AsyncStorage.getItem('aspboilerplate:userId');
const stores = initializeStores();
const Drawer = createDrawerNavigator();
const scheme = 'light';
export default function App() {
  console.log(getToken);
  console.log(getUserId);
  return (
    <Provider {...stores} >
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator initialRouteName="login"
          screenOptions={screenOptionsStyle}
          drawerType='back'>
          {
            getToken && Number.parseInt(getUserId) > 0 ?
              appRouters.filter(x => x.showInMenu).map(x => {
                return <Drawer.Screen key={x.name} name={x.name} component={x.component} options={{ headerTitle: () => <HeaderLogo title={x.title} />, headerShown: true }} />
              }) 
              :
              userRouters.filter(x => x.showInMenu).map(x => {
                return <Drawer.Screen key={x.name} name={x.name} component={x.component} />
              })
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}