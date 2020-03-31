import React from 'react';
import AudosPlayer from 'audos';
import UIPlaylisScene from 'audos/components/ui/UIPlaylistScene';

import { playlist, actionItems } from './Data';

const App = () => {
    /*return <UIPlaylisScene
        colorScheme={'Dark'}
        items={playlist}
    />*/

    return (
        <AudosPlayer
            colorScheme={'Dark'}
            actionItems={actionItems}
            items={playlist}
            minimize={false}
        />
    )
};

export default App;
