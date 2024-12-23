import { View, Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2'>
      <Text>{item.name}</Text>
   </Pressable>
  );
}