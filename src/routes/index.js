import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{  headerShown: false}}
            />
               <Stack.Screen
                 name="SignIn"
                 component={SignIn}
                 options={{  headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{  headerShown: false}}
            />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{  headerShown: false}}
            />
        </Stack.Navigator>
    )
}