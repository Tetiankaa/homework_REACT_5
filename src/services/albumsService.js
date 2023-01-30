import {urls} from "../configs";
import {axiosService} from "./axiosService";

const albumsService = {
    getAll:() => axiosService.get(urls.albums)
}

export {
    albumsService
}