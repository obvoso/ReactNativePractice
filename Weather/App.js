import { useEffect , useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const API_KEY = "be6b029a295802f909614a4dba4c3d34";

export default function App() {
	const [city, setCity] = useState("Loading...");
	const [days, setDays] = useState([]);
	const [ok, setOk] = useState(true);
	const getWeather = async() => {
		const {granted} = await Location.requestForegroundPermissionsAsync();
		granted ? setOk(true) : setOk(false);
		const {
			coords: {latitude, longitude}
		} = await Location.getCurrentPositionAsync({accuracy:5});
		const location = await Location.reverseGeocodeAsync(
			{latitude, longitude},
			{useGoogleMaps: false}
		);
		setCity(location[0].city);
		const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`);
		const json = await res.json();
		setDays(json.daily);
	}
	useEffect(() => {
		getWeather;
	}, []);
  return (
    <View style={styles.container}>
     <View style={styles.city}>
		<Text style={styles.cityName}>{city}</Text>
	 </View>
		<ScrollView 
		pagingEnabled
		horizontal
		showsHorizontalScrollIndicator={false}
		style={styles.weather}>
			{days.length === 0 ? (
				<View style={styles.day}>
					<ActivityIndicator 
						color="white" 
						size="large" />
				</View>
			) : (
				days.map((day, index) => 
				<View key={index}style={styles.day}>
					<Text style={styles.temp}>{day.temp.day}</Text>
					<Text style={styles.desc}>{day.weather[0].main}</Text>
				</View>
				)
			)}
		</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  city: {
	flex: 1,
	justifyContent: "center",
	alignItems: "center"
  },
  cityName: {
	fontSize: 68,
	fontWeight: "500",
  },
  weather: {},
  day: {
	width:SCREEN_WIDTH,
	//justifyContent: "center",
	alignItems : "center",
  },
  temp: {
	marginTop: 20,
	fontSize : 158,
  },
  desc :{
	fontSize: 60,
  },
});
