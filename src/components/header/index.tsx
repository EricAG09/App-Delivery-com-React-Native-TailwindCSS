import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
import { Image } from "react-native";

export function Header () {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={20} color='#121212' />
            </Pressable>

            <View className="flex items-center justify-center">
                <Image className="w-20 h-20"
                    source={require("../../assets/images/logo.png")}
                />
            </View>
            
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={20} color='#121212' />
            </Pressable>
        </View>
    );
}