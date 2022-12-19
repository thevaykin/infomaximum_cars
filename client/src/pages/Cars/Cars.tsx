import { FC } from "react";
import { observer } from "mobx-react-lite";
import Sort from "../../components/interface/Sort/Sort";
import Search from "../../components/interface/Search/Search";
import CarsList from "../../components/Cars/CarsList";
import { cars } from "./cars.styles";



const Cars: FC = observer(() => {

  return (
    <>
      <div css={cars.sortAndSearch}>
        <Sort
          options={[
            { value: "stocks", name: "Сначала в наличии" },
            { value: "nameAZ", name: "По имени (A-Z)" },
            { value: "nameZA", name: "По имени (Z-A)" },
            { value: "newer", name: "Сначала новее" },
            { value: "older", name: "Сначала старше" },
            { value: "cheaper", name: "Сначала дешевле" },
            { value: "expensive", name: "Сначала дороже" },
          ]}
        />
        <Search />
      </div>
      <CarsList />
    </>
  );
});


export default Cars;
