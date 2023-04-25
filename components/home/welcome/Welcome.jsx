import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];
const Welcome = ({ query, setQuery, handleSearch }) => {
    const [activeJobType, setActiveJobType] = useState('full-time');
    const router = useRouter();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome Abdulrasheed</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={query}
                        placeholder="What are you looking for?"
                        onChangeText={(text) => setQuery(text)}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;
