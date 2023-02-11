import React, { useState, useEffect } from 'react'
import { View, Text, Touchable, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({likesCountProp, caption, postedAt}) => {
	const [likesCount, setLikesCount] = useState(0);
	const [likes, setLikes] = useState(false);
	const onLikePressed = () => {
		setLikes(!likes);
		likes ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1)
	}
	useEffect(() => {
		setLikesCount(likesCountProp);
	}, [])

	return (
		<>
			<View style={styles.icons}>
				<View style={styles.lefticons}>
					<TouchableWithoutFeedback onPress={onLikePressed}>
						{likes ? 
						<AntDesign name="heart" size={22} color="red" /> 
						: <AntDesign name="heart" size={22} color="black" />
						}
					</TouchableWithoutFeedback>
					<FontAwesome5 name="comment" size={22} color="black" />
					<Ionicons name="paper-plane-outline" size={22} color="black" />
				</View>
				<View style={styles.righticons}>
					<FontAwesome name="bookmark" size={24} color="black" />
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.likesCount}>{likesCount} Likes</Text>
				<Text style={styles.caption}>{caption}</Text>
				<Text style={styles.postedAt}>{postedAt}</Text>
			</View>
		</>
	);
}

export default Footer;