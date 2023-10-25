import {axiosCar} from "./axios.car";
import {urls} from "../constance/urls";

const carService = {
    getAll: () => axiosCar.get(urls.cars.base),
    createCar: (car) => axiosCar.post(urls.cars.base, car),
    updateById: (car, id) => axiosCar.put(urls.cars.byId(id), car),
    deliteCar: (id) => axiosCar.delete(urls.cars.byId(id))

}

export {carService}