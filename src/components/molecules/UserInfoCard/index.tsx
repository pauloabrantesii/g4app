import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { UserInfoCardProps } from './types';

const UserInfoCard = ({ image, name, phone }: UserInfoCardProps) => (
  <View style={styles.container}>
    <View style={styles.content}>
    <Image source={image} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
    </View>
    <View style={styles.divider} />
  </View>
);

export default UserInfoCard;
