import ProfilePicture from "../../assets/images/ProfilePicture";
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";
//import styles from "./styles";

const Story = (props) => {
	const {
		story: {
			user: {
				id,
				imageUri,
				name
			}
		}
	} = props;

	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Story", { userId : id });
	}
	return (
	<TouchableHighlight onPress={onPress} /*style={styles.container}*/>
		<View>
			<ProfilePicture uri={imageUri} />
			<Text style={{textAlign:'center'}}>{name}</Text>
		</View>
	</TouchableHighlight>
	);
}	

export default Story;