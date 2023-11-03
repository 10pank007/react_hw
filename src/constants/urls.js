const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
const character = '/character';

const urls = {
    episodes,
    character: {
        byIds: (Ids) => `${character}/${Ids}`
    }
}

export {urls, baseURL}