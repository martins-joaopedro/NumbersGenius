import { View, Pressable } from "react-native";
import { Container, Card } from './styles.js'

import { Questions } from "../Questions";
import { COLORS } from "../../global/index.js";
import { useState } from "react";
import { generateRandomNumber } from "../../utilz/main.js";

export const Game = () => {
    
    const [top, setTop] = useState(100);
    const [number, setNumber] = useState(0);

    const getNumber = () => {
        const N = generateRandomNumber(top);
        setNumber(N)
    }

    return(
        <View>
            <Questions id={1}/>
            <Pressable onPress={() => getNumber()}>
                <Card color={COLORS.secondary}>
                    <Card.Text>{number}</Card.Text>
                </Card>
            </Pressable>
        </View>
    )
}