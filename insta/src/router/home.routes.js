import logo from '../assets/images/logo.png';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="HomeStack"  
		component={HomeScreen} 
		options={{
			title: 'Instagram',
			headerLeftContainerStyle: {
				marginLeft: 15
			},
			headerRightContainerStyle: {
				marginRight: 15
			},
			headerTitle: () => (
				<Image source={logo} resizeMode="contain" style={{width:100, height: 50}}/>
			),
			headerLeft: () => (
					<Feather name="search" size={24} color="black" style={{marginLeft: 10}} />
			),
			headerRight: () => (
				<Feather name="camera" size={24} color="black" style={{marginRight: 10}} />
			)
		}}
		/>
		</HomeStack.Navigator>
)
export default HomeRoutes;