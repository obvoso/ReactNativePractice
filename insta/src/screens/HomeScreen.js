import React from 'react'
import Stories from '../components/Stories'
import Feed from '../components/Post/components/Feed'

const HomeScreen = () => {
	return (
		<>
			{/*<Stories /> 여따 하면 상단에 고정됨*/}
			<Feed />
		</>
	)
}

export default HomeScreen;