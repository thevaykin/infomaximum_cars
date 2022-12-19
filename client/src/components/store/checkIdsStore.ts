import { makeAutoObservable } from "mobx";

class CheckIds {
    id: number[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addId(id: any) {
        this.id.push(id);
    }

    removeId(id: any) {
        this.id = this.id.filter((idCar) => idCar !== id)
    }

}

export default new CheckIds();
