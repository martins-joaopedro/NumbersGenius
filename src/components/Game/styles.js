import styled from "styled-components/native"
import { COLORS } from '../.././global'

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Card = styled.View`
    background-color: ${props => props.color};
    width: 120px;
    height: 60px;
    border-radius: 5px;
    elevation: 3;

    margin: 10px;
    align-items: center;
    justify-content: center;
`;

Card.Text = styled.Text`
    font-size: 30px;
`
