import React from 'react';
import { Modalize } from 'react-native-modalize';

const ModalizeWrapper = (
    { 
        children, 
        referal, 
        adjustToContentHeight, 
        snapPoint, 
        HeaderComponent, 
        closeOnOverlayTap, 
        keyboardAvoidingOffset, 
        scrollViewProps, 
        ...props 
    }) => {
    return (
        <Modalize
            {...props}
            ref={referal}
            adjustToContentHeight={adjustToContentHeight}
            HeaderComponent={HeaderComponent}
            snapPoint={snapPoint}
            closeOnOverlayTap={closeOnOverlayTap}
            keyboardAvoidingOffset={keyboardAvoidingOffset}
            scrollViewProps={scrollViewProps}
        >
            { children }
        </Modalize>
    )
};

export default ModalizeWrapper;
