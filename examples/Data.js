const noop = () => alert('U clicked');

const actionItems = [
    {
        title: 'Перейти к музыканту', icon: 'mic', onPress: noop
    },
    {
        title: 'Добавить в плейлист', icon: 'star', onPress: noop
    },
    {
        title: 'Слушать далее', icon: 'play-list', onPress: noop
    },
    {
        title: 'Удалить из моей музыки', icon: 'trash', onPress: noop
    },
];

const playlist = [
    {
        id: 10, title: 'Друг', author: 'Нурминский', image: null
    },
    {
        id: 10, title: 'ОСТАНУСЬ РАССВЕТОМ (feat. Dr. Shaman)', author: 'ФОГЕЛЬ feat. Dr. Shaman', image: { uri: 'https://img.zvuqa.net/albums/2/fogel-lyubol-pt-1.jpg' }
    },
    {
        id: 10, title: 'Вселенная (feat. DJ Mikis)', author: 'Леша Свик feat. DJ Mikis', image: { uri: 'https://freshall.com/img/2018-04/20/4gt8amfrm2w58jefu4jo3ehau.jpg' }
    },
    {
        id: 10, title: '#МУЗЫКАДЛЯДУШИ', author: 'Al Fakher', image: { uri: 'https://avatars.yandex.net/get-music-content/108289/2d4d55ad.a.7800089-1/m1000x1000' }
    },
    {
        id: 10, title: 'Рондо Prod by Baggage', author: 'Зомб', image: { uri: 'https://muzonov.net/uploads/posts/2019-04/medium/1555348585_1555345638_photo_2019-04-15_19-07-18.jpg' }
    },
    {
        id: 10, title: 'Волшебник', author: 'Gidayyat, Gazan', image: { uri: 'https://avatars.yandex.net/get-music-content/2110367/b24facf0.a.8987992-1/m1000x1000' }
    },
    {
        id: 10, title: 'Так нельзя', author: '10AGE', image: { uri: 'https://images.genius.com/f9734ff6ec0953354ef4c9e42cbb7d83.663x663x1.jpg' }
    },
    {
        id: 10, title: 'Кто ты такая', author: 'VERBEE', image: { uri: 'https://avatars.yandex.net/get-music-content/176019/705270d9.a.7910334-1/m1000x1000' }
    },
    {
        id: 10, title: 'Samolet', author: 'Nebezao, Mastank feat. Rafal', image: { uri: 'https://i.ytimg.com/vi/hv4OPafgSs0/maxresdefault.jpg' }
    },
    {
        id: 10, title: '#ВоДвореХодитСлух', author: 'MITCHEL feat. soahx', image: { uri: 'https://mp3hubs.ru/images/sounds/1578348430mp3hubs.png' }
    },
    {
        id: 10, title: 'Девчонка-газировка prod. by Akva', author: 'FONARI', image: { uri: 'https://muzter.net/_ld/98/92388275.jpg' }
    },
    {
        id: 10, title: 'СПАСАТЕЛЬНЫЙ КРУГ', author: 'FACE', image: { uri: 'https://images.genius.com/7ea34d9ff31936b37ac32d2920bf4e18.1000x1000x1.jpg' }
    },
    {
        id: 10, title: 'КОРОНАМИНУС', author: 'Gidayyat, Gazan', image: { uri: 'https://music-2020.net/images/track/764726044_Gidayyat,_Gazan_-_%D0%9A%D0%9E%D0%A0%D0%9E%D0%9D%D0%90%D0%9C%D0%98%D0%9D%D0%A3%D0%A1_(SLRS_remix).jpg' }
    },
    {
        id: 10, title: 'Как будто в первый раз', author: 'Нурминский', image: { uri: 'https://static.mp3xa.cc/album_images/400x400/nurminskijj-pacany-s-ulic-vybivajutsja-v-ljudi.jpg' }
    },
    {
        id: 10, title: 'TURN IT ON!', author: 'MORGENSHTERN, PALC', image: { uri: 'https://images.genius.com/68989da9f5ae7ad223f58b75684ec3da.804x804x1.jpg' }
    },
    {
        id: 10, title: 'Танцы тебя хотят', author: 'BLAcKxxl, ALEXEMELYA', image: { uri: 'https://muzonov.net/uploads/posts/2018-09/medium/1536438662_1536429961_mini_alj071lknao.jpg' }
    },
];

export {
    playlist, actionItems
}
