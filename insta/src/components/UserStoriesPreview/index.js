import {FlatList ,View } from "react-native";
import Story from "../UserStoryPreview";
import storiesData from "../../assets/data/stories"
import styles from "./styles";

const Stories = () => (
	<FlatList
		style={{marginBottom: 15}}
		data={storiesData}
		keyExtractor={({name}) => name}
		horizontal
		showsHorizontalScrollIndicator={false}
		renderItem={({item}) => <Story story={item}/>}
	/>
)

export default Stories;