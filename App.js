import AdicionarRoupas from './pages/AdicionarRoupas';
import CreateAccount from './pages/CreateAcount';
import ForgotPassword from './pages/ForgotPassword';
import PaginaRoupas from './pages/home';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAcount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={PaginaRoupas} />
        <Stack.Screen name="AdicionarRoupas" component={AdicionarRoupas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
