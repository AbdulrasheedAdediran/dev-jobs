import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconURL, dimension, handlPress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlPress}>
            <Image source={iconURL} resizeMode="cover" style={styles.btnImg(dimension)} />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
