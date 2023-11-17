const baseURL = "https://rickandmortyapi.com/api";

const characters = "/character";
const episodes = "/episode";

const urls = {
    episodes,
    characters: {
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {baseURL, urls};