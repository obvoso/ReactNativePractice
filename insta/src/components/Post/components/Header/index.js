import React from 'react'
import { View, Text } from 'react-native';
import ProfilePicture from '../../../../assets/images/ProfilePicture';
import styles from './styles';

const Header = ({imageUri, name}) => (
	<View style={styles.container}>
		<ProfilePicture uri={imageUri} size={40} />
		<Text style={styles.name}>{name}</Text>
	</View>
)


export default Header;