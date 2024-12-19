import { Pressable, Text } from "react-native";
import { FoodProps } from "..";

export function CardHorizontalFood ({ food }: { food: FoodProps }) {
    return (
        <Pressable className="flex flex-col rounded-xl">
            <Text>{food.name}</Text>
        </Pressable>
    );
}

