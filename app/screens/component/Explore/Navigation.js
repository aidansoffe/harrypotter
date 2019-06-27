import { createStackNavigator, createAppContainer } from 'react-navigation';
import Explore from '../../../screens/Explore';
import Watch from '../Explore/Watch';


const RootStack = createStackNavigator({
  Explore: { screen: Explore},
  Watch: { screen: Watch}
});

const AppNavigator = createAppContainer(RootStack);

// export default AppNavigator;