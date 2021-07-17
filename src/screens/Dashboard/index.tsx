import React from "react";
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    HightligtsCards,
    Icon
} from './styles';

import { Text, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCard } from "../../components/HighlightCard";

export function Dashboard() {
    return (
        <Container>
            <Header>

                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/9784854?v=4' }} />
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>
                            <UserName>Julio</UserName>
                        </User>

                    </UserInfo>
                    <Icon name="power" />

                </UserWrapper>
            </Header>
            <HightligtsCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HightligtsCards>
        </Container>
    )
}
