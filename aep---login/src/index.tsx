import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  List,
} from './screens';

const Router = createStackNavigator(
  {
    ForgotPasswordScreen,
    LoginScreen,
    RegisterScreen,
    Dashboard,
    List,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
