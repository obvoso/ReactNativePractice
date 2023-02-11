import React from 'react'
import { SafeAreaView } from 'react-native'
import Stories from '../components/Stories'
import Feed from '../components/Post/components/Feed'

const HomeScreen = () => (
		<SafeAreaView>
			{/*<Stories /> 여따 하면 상단에 고정됨*/}
			<Feed />
		</ SafeAreaView>
)

export default HomeScreen;