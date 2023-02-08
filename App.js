import 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { appRouters, userRouters } from './src/components/routers/router.config';
import { screenOptionsStyle } from './src/style/styles';
import { Provider } from 'mobx-react';
import initializeStores from './src/stores/storeInitializer';

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

const stores = initializeStores();
const Drawer = createDrawerNavigator();
const scheme = 'light';
export default function App() {
  return (
    <Provider {...stores} >
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator initialRouteName="login" screenOptions={screenOptionsStyle} drawerType='back'> 
          {
            appRouters.filter(x => x.showInMenu).map(x => {
              return <Drawer.Screen key={x.name} name={x.name} component={x.component} options={{ headerTitle: () => <HeaderLogo title={x.title} />, headerShown: x.noHeader == true ? false : true }} />
            })
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}