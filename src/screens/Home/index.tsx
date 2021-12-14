import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/BUttonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";

export function Home() {
    const [category, setCategory] = useState(0);

    const navigaton = useNavigation();

    const appointments = [
        {
            id: 1,
            guild: {
                id: 1,
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: 1,
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: 2,
            guild: {
                id: 1,
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: 1,
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: number) {
        categoryId === category ? setCategory(0) : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigaton.navigate('AppointmentDetails')
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendados"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
}