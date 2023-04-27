import { View } from "react-native"
import { QuestionsCard } from "./styles"

export const Questions = ({id}) => {
    const questions = [
        {value: "Este número é um número par?"},
        {value: "O número é divisível por 3?"},
    ]

    return(
        <View>
            <QuestionsCard>
                <QuestionsCard.Text>
                    {questions[id].value}
                </QuestionsCard.Text>
            </QuestionsCard>
        </View>
    )
}