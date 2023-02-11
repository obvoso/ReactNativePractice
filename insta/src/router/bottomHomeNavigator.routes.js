
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './home.routes'

import DiscoveryScreen from '../screens/DiscoveryScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CreateScreen from '../screens/CreateScreen';
import ProfileScreen from '../screens/ProfileScreen';


import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
	<Tab.Navigator
	  screenOptions={({ route }) => ({
			tabBarActiveTintColor: "#000",
			tabBarInactiveTintColor: "gray",
			tabBarShowLabel: false,
			headerShown:false,
			tabBarStyle: [
			  {
				"display": "flex"
			  },
			  null
			],
		tabBarIcon: ({ focused, color, size }) => {
		  if (route.name === 'Home') 
			return <FontAwesome name="home" size={24} color="black" />;
		  if (route.name === 'Discovery') 
			return <Feather name="search" size={24} color="black" />;
		  if (route.name === 'Post') 
			return <AntDesign name="plussquareo" size={24} color="black" />;
		  if (route.name === 'Notifications') 
			return <AntDesign name="hearto" size={24} color="black" />;
		  if (route.name === 'Profile') 
			return <EvilIcons name="user" size={34} color="black" />;
		},
	  })}
	>
		<Tab.Screen name="Home" component={HomeStackScreen} />
		<Tab.Screen name="Discovery" component={DiscoveryScreen} />
		<Tab.Screen name="Post" component={CreateScreen} />
		<Tab.Screen name="Notifications" component={NotificationScreen} />
		<Tab.Screen name="Profile" component={ProfileScreen} />
	</Tab.Navigator>
)
export default BottomHomeNavigator;