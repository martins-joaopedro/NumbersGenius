import styled from "styled-components/native";
import { COLORS } from "../../global";
import { Card } from "../Game/styles";

export const QuestionsCard = styled(Card)`
    background-color: ${COLORS.third};
    width: 80%;
`

QuestionsCard.Text = styled.Text`
    font-size: 15px;
`