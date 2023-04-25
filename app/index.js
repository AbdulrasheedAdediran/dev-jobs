import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

export default function Home() {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const handleSearch = () => {
        if (query) {
            router.push(`/search/${query}`);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" />,
                    headerRight: () => (
                        <ScreenHeaderBtn iconURL={images.profile} dimension="100%" />
                    ),
                    headerTitle: '',
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome query={query} setQuery={setQuery} handleSearch={handleSearch} />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
