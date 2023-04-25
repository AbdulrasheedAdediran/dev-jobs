import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
    const [selectedJob, setSelectedJob] = useState();
    const { data, isLoading, error } = useFetch('search', {
        query: 'React developer',
        page: '1',
        num_pages: '1',
    });
    const router = useRouter();
    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>

                <TouchableOpacity style={styles.headerBtn}>
                    <Text>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" />
                ) : error ? (
                    <Text>{error}</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;