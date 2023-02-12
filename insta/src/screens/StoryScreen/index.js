import { useRoute, useNavigation } from '@react-navigation/native';
//import { StackActions, NavigationActions } from 'react-navigation';
import { useEffect, useState, Image } from 'react';
import { Text, 
	View,
	SafeAreaView,
	ImageBackground,
	ActivityIndicator ,
	TouchableWithoutFeedback,
	Dimensions,
	TextInput } 
	from 'react-native'
import storiesData from '../../assets/data/stories'
import ProfilePicture from '../../assets/images/ProfilePicture';
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// const route = useRoute대신 props로 route받음 걍..내가 수정한 거 오류나면 바꾸렴
const StoryScreen = ({ route, navigation }) => {
	const [userStories, setUserStories] = useState(null);
	const [activeStoryIndex, setActiveStoryIndex] = useState(null);
	
	const userId = route.params.userId;
	
	useEffect(() => {
		//여기 storyData대신 storiesData넣으라는데 대체 머임??;;걍 변수선언인가
		const findUserStories = storiesData.find(storiesData => storiesData.user.id === userId);
		setUserStories(findUserStories);
		setActiveStoryIndex(0);
	}, [])

	const NavigateToNextUser = () => {
		const nextUserId = parseInt(userId) + 1;
		nextUserId === 7 ? 
			navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			})
		:	navigation.push("Story", { userId: nextUserId.toString() });
	}
	
	const NavigateToPrevUser = () => {
		const prevUserId = parseInt(userId) - 1;
		prevUserId === 0 ? 
			navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			})
		:	navigation.push("Story", { userId: prevUserId.toString() });
	}
	const handleNextStory = () => {
		if (activeStoryIndex >= userStories.stories.length - 1) {
			NavigateToNextUser();
			return ;
		}
		setActiveStoryIndex(activeStoryIndex + 1);
	}
	
	const handlePrevStory = () => {
		if (activeStoryIndex <= 0) {
			NavigateToPrevUser();
			return ;
		}
		setActiveStoryIndex(activeStoryIndex - 1);
	}

	const handlePress = (e) => {
		const x = e.nativeEvent.locationX;
		const screenWidth = Dimensions.get('window').width;
		(x < screenWidth / 2) ? handlePrevStory() : handleNextStory();
	}
	
	if (!userStories) {
		return (
			<SafeAreaView>
				<ActivityIndicator />
			</SafeAreaView>
		);
	}
	const activeStory = userStories.stories[activeStoryIndex];

	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback onPress={handlePress} >
				<ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>
					<View style={styles.userInfo} >
						<ProfilePicture uri={userStories.user.imageUri} size={50} />
						<Text style={styles.userName}>{userStories.user.name}</Text>
						<Text style={styles.postedTime}>{activeStory.postedTime}</Text>
					</View>
					<View style={styles.bottomContainer}>
						<Feather style={styles.camera} name="camera" size={32} color="white" />
						<TextInput style={styles.textInput} 
							placeholder="Send message"
							placeholderTextColor={"white"}
						/>
						<Ionicons style={styles.paperPlane} name="paper-plane-outline" size={32} color="white" />
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}

export default StoryScreen;
