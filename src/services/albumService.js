import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const albumService = {
    getAllAlbums: () => axiosService.get(urls.albums)
}

export {albumService}