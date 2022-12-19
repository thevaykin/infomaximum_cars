import axios from "axios";
import carsListStore from "../components/store/carsListStore";


export const CarsListQuery = `
  query FindCars($search: String!) {
    cars(search: $search) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`

export default class carsService {
  static async getCarsList(query?: string) {
    const response = await axios
      .post(import.meta.env.VITE_API_URL, {
        query: CarsListQuery,
        variables: { search: `${query}` },
      })
      .then((response) => {
        carsListStore.addCars(response.data.data.cars);
      });
    return response;
  }
}