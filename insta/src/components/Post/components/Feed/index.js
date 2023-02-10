import { FlatList } from "react-native";
import Post from "../..";
import Stories from "../../../Stories"

const data = [
	{
		user: {
			imageUri : 'https://velog.velcdn.com/images/eojine94/post/189018d7-fe6e-4d88-afec-c31865a5a8ff/ReactNative.png',
			name: 'Lala2',
		},
		imageUri: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2a_690x455.jpg.img.jpg',
		caption: 'Beautiful city #instagram',
		likesCount: 1234,
		postedAt: '6 minutes ago',
	},
	{
		user: {
			imageUri : 'https://velog.velcdn.com/images/eojine94/post/189018d7-fe6e-4d88-afec-c31865a5a8ff/ReactNative.png',
			name: 'Lala2',
		},
		imageUri: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2a_690x455.jpg.img.jpg',
		caption: 'Beautiful city #instagram',
		likesCount: 1234,
		postedAt: '6 minutes ago',
	},
	{
		user: {
			imageUri : 'https://velog.velcdn.com/images/eojine94/post/189018d7-fe6e-4d88-afec-c31865a5a8ff/ReactNative.png',
			name: 'Lala2',
		},
		imageUri: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2a_690x455.jpg.img.jpg',
		caption: 'Beautiful city #instagram',
		likesCount: 1234,
		postedAt: '6 minutes ago',
	}
]


const Feed = () => (
	<FlatList
	data={data}
	renderItem={({item}) => <Post post={item} />}
	ListHeaderComponent={Stories}
	/>
)

export default Feed;