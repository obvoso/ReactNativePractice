import { useRoute } from '@react-navigation/native';
import { useEffect, useState, Image } from 'react';
import { Text, 
	SafeAreaView,
	ImageBackground,
	ActivityIndicator } from 'react-native'
import storiesData from '../../assets/data/stories'
import styles from './styles'


const StoryScreen = () => {
	const [userStories, setUserStories] = useState(null);
	const [activeStoryIndex, setActiveStoryIndex] = useState(null);
	const [activeStory, setActiveStory] = useState(null);
	const route = useRoute();
	
	useEffect(() => {
		const userId = route.params.userId;
		//여기 storyData대신 storiesData넣으라는데 대체 머임??;;
		const userStories = storiesData.find(storiesData => storiesData.user.id === userId);
		setUserStories(userStories);
		setActiveStoryIndex(0);
	}, [])

	useEffect(() => {
		if (userStories && userStories.stories.length > activeStoryIndex - 1)
			setActiveStory(userStories.stories[activeStoryIndex])
	}, [activeStoryIndex])

	if (!activeStory) {
		return (
			<SafeAreaView>
				<ActivityIndicator/>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView>
			<ImageBackground source={{uri: activeStory.imageUri}} style={styles.image} />
		</SafeAreaView>
	);
}

export default StoryScreen;
