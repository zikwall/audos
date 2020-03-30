import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ColorScheme = {
    Dark: {
        backgroundColor: '#121212',
        primaryColor: '#fff',
        secondaryColor: '#ccc',
        thirdColor: '#46b3e6',
        fourColor: '#ccf0e1'
    },
    Light: {

    }
};

export {
    width, height, ColorScheme
}
