import React from 'react';
import RePlayerMusic from 're-player-music';
import UIPlaylisScene from 're-player-music/components/ui/UIPlaylistScene';

import { playlist, actionItems } from './Data';

const App = () => {
    /*return <UIPlaylisScene
        colorScheme={'Dark'}
        items={playlist}
    />*/

    return (
        <RePlayerMusic
            colorScheme={'Dark'}
            actionItems={actionItems}
            items={playlist}
            minimize={false}
        />
    )
};

export default App;
