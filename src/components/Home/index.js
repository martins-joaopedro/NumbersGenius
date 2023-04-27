import { View, Pressable, Text } from "react-native";
import { Game } from "../Game/index.js";

export const Home = ({ navigation }) => {
    return(
        <View style={{flex: 1}}>  
            <Game />
        </View> 
    )
}