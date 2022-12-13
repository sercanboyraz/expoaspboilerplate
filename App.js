import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Appearance, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/scenes/dashboard/dashboards';
import Users from './src/scenes/user/users';
import Roles from './src/scenes/role/roles';

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // Use dark color scheme
}

function HeaderLogo() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/favicon.png')}
      />
      <Text style={{ color: 'white', padding: 5, fontSize: 22 }}>Home</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: { width: '100%', backgroundColor: '#c6cbef', width: 240 },
          drawerType: 'permanent',
        }}>
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerTitle: () => <HeaderLogo />, headerShown: true }} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Roles" component={Roles} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
