import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		margin: 2,
	},
	likesCount: {
		fontWeight: 'bold',
		margin: 3,
	},
	caption: {
		margin: 3,
	},
	postedAt: {
		color: '#8c8c8c',
		margin: 3,
	},
	icons: {
		flexDirection: 'row',
		justifyContent: "space-between",
		padding: 10,
	},
	lefticons: {
		flexDirection: 'row',
		width: 100,
		justifyContent: "space-between",
	}

})

export default styles;