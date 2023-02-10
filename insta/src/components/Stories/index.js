import {FlatList ,View } from "react-native";
import Story from "../Story";
import styles from "./styles";

const data = [
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_hero-img_900x420.jpg.img.jpg',
		name: 'Soo',
	},
	{

		imageUri : 'https://velog.velcdn.com/images/eojine94/post/189018d7-fe6e-4d88-afec-c31865a5a8ff/ReactNative.png',
		name: 'Lala',
	},
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2a_690x455.jpg.img.jpg',
		name: 'Hihi',
	},
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
		name: 'Kiki',
	},
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_hero-img_900x420.jpg.img.jpg',
		name: 'Soo1',
	},
	{

		imageUri : 'https://velog.velcdn.com/images/eojine94/post/189018d7-fe6e-4d88-afec-c31865a5a8ff/ReactNative.png',
		name: 'Lala2',
	},
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2a_690x455.jpg.img.jpg',
		name: 'Hihi3',
	},
	{
		imageUri : 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
		name: 'Kiki4',
	},
]

const Stories = () => (
	<FlatList
		style={styles.container}
		data={data}
		keyExtractor={({name}) => name}
		horizontal
		showsHorizontalScrollIndicator={false}
		renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
	/>
)

export default Stories;