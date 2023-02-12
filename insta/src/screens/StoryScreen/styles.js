import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "space-between",
		width: "100%",
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	userName: {
		color: "white",
		fontWeight: 'bold',
		fontSize: 18,
	},
	postedTime: {
		marginLeft: 10,
		color: "#808080",
		fontWeight: 'bold',
		fontSize: 16,
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 10,
		marginBottom: 10,
	},
	textInput: {
		width : '75%',
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 50,
		height: 30,
		paddingHorizontal: 10,
		color: "white",
		textAlign: "center", // 걍 추가함 ㅋㅋ
		fontSize: 16,
	},
	camera: {

	},
	paperPlane: {

	}
})

export default styles;