import { FC, useState } from "react";
import { Icons } from "../../../icons/Icons";
import { stls } from "./sort.styles";
import { font } from "../../../styles/font.styles";
import carsListStore from "../../store/carsListStore";

interface IOptions {
    options: {
        value: string;
        name: string;
    }[]
};

const Sort: FC<IOptions> = ({ options, value }: any) => {
    const [select, setSelect] = useState("");

    const sortCar = (select: string) => {
        setSelect(select);
        switch (select) {
            case "stocks": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => Number(a.availability) - Number(b.availability));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "nameAZ": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => `${a.brand}${a.model}`.replace(/ /g, '').localeCompare(`${b.brand}${b.model}`.replace(/ /g, '')));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "nameZA": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => `${b.brand}${b.model}`.replace(/ /g, '').localeCompare(`${a.brand}${a.model}`.replace(/ /g, '')));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "newer": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => Number(b.model_year) - Number(a.model_year));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "older": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => Number(a.model_year) - Number(b.model_year));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "cheaper": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => Number(a.price.substring(1)) - Number(b.price.substring(1)));
                carsListStore.addCars(carsListCopy);
                break;
            }
            case "expensive": {
                const carsListCopy = [...carsListStore.cars];
                carsListCopy.sort((a, b) => Number(b.price.substring(1)) - Number(a.price.substring(1)));
                carsListStore.addCars(carsListCopy);
                break;
            }
        }

    };

    return (
        <>
            <div css={stls.sort}>
                <div css={stls.arrows}>
                    {Icons.sort()}
                </div>
                <select
                    id="selectCars"
                    value={value}
                    onChange={(event) => sortCar(event.target.value)}
                    css={[stls.select, font.TEXT4]}
                >
                    {options.map((option: any) => (
                        <option css={stls.option} key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Sort;