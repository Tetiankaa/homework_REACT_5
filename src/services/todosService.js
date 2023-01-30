import {urls} from "../configs";
import {axiosService} from "./axiosService";

const todosService = {
    getAll:() => axiosService.get(urls.todos)
}

export {
    todosService
}