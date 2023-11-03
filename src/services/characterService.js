import {axiosService} from "./axiosService";

import {urls} from "../constants";

const characterService = {
    getByIds: (Ids) => axiosService.get(urls.character.byIds(Ids))
}

export {characterService}