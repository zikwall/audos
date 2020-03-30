import React from 'react';
import { View, Image } from 'react-native';
import UIEmptyImage from './UIEmptyImage';

const ImageWrap = ({ source, width, height, mode, round, isAlbum }) => {
    if (!source) {
        return <UIEmptyImage width={width} height={height} round={round} isAlbum={isAlbum} />
    }
    
    return (
        <Image
            style={{ width: width, height: width, borderRadius: round }}
            resizeMode={mode}
            source={source}
        />
    )
};

ImageWrap.defaultProps = {
    source: { uri: 'https://static.mp3xa.cc/album_images/400x400/nurminskijj-pacany-s-ulic-vybivajutsja-v-ljudi.jpg' },
    mode: 'contain',
    round: 2
};

export default ImageWrap;
