import React, { useState } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";


export function SignIn() {
    const navigato = useNavigation();

    function handleSignIn() {
        navigato.navigate('Home');
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        title={"Entrar com o Discord"}
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}