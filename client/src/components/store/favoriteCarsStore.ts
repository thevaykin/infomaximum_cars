import { makeAutoObservable } from "mobx";
import carsService from "../../Api/fetchCars";
import checkIdsStore from "./checkIdsStore";

interface IFavoriteCars {
    id: number;
    brand: string;
    model: string;
    color: string;
    model_year: number;
    img_src: string;
    price: string;
    description: string;
    availability: boolean;
};

class carsListStore {
    cars: IFavoriteCars[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCar(car: any) {
        this.cars.push(car);
        checkIdsStore.addId(car.id);
    }

    removeCars(car: any) {
        this.cars = this.cars.filter((favoriteCar) => favoriteCar.id !== car.id)
        checkIdsStore.removeId(car.id);
    }


    fetchData = async () => {
        await carsService.getCarsList();
    };
}

export default new carsListStore();