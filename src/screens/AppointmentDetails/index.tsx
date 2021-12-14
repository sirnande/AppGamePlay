import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons'
import { FlatList, ImageBackground, Text, View } from "react-native";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { styles } from "./style";
import { ListHeader } from "../../components/ListHeader";

export function AppointmentDetails() {
    const members = [
        {
            id: 1,
            username: 'Sirnande',
            avatar_url: 'https://github.com/sirnande.png',
            status: 'online'
        },
        {
            id: 2,
            username: 'Sirnande',
            avatar_url: 'https://github.com/sirnande.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perger uma partia da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
            />

        </Background>
    )
}