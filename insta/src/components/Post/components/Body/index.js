import React from 'react'
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => (
	<Image source={{uri : imageUri}} style={styles.image}/>
)

export default Body;