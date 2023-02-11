import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		textAlign: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#3c3c3c',

	},
	right: {
		marginRight: 10,
	},
	left : {
		flexDirection: 'row',
	},
})

export default styles;