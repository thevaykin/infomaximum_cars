import { makeAutoObservable, toJS } from "mobx";
import carsService, { CarsListQuery } from "../../Api/fetchCars";

interface ICars {
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
    cars: ICars[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCars(data: ICars[]) {
        this.cars = data;
    }

    fetchData = async () => {
        await carsService.getCarsList();
    };
}

export default new carsListStore();