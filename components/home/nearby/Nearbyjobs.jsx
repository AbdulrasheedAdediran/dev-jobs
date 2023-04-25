import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';

const Nearbyjobs = () => {
    const [selectedJob, setSelectedJob] = useState();
    const { data, isLoading, error } = useFetch('search', {
        query: 'React developer',
        page: '1',
        num_pages: '1',
    });
    const router = useRouter();
    const handleCardPress = (job) => {
        router.push(`/job-details/${job}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>

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
                    data.map((job) => (
                        <NearbyJobCard
                            key={job?.job_id}
                            job={job}
                            handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;
