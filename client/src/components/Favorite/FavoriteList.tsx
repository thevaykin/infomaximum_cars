import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Icons } from "../../icons/Icons";
import { clrs } from "../../styles/colors.styles";
import { font } from "../../styles/font.styles";
import Button from "../interface/Button/Button";
import favoriteCarsStore from "../store/favoriteCarsStore";
import { fvrt } from "./favorite.styles";

const Cars: FC = observer(() => {

  const counter = (n: number) => {
    n %= 10;
    if (n === 0) {
      return 'Список избранных авто пуст.'
    }
    if (n === 1) {
      return `Избранные товары — ${n} позиция`;
    }
    if (n >= 2 && n <= 4) {
      return `Избранные товары — ${n} позиции`;
    }
    return `Избранные товары — ${n} позиций`;
  }

  return (
    <>
      <h2 css={[font.TEXT1, fvrt.title]}>{counter(favoriteCarsStore.cars.length)}</h2>
      {favoriteCarsStore.cars.map((car) => (
        <div key={car.id} css={fvrt.car}>

          <img
            src={`http://localhost:4000${car.img_src}`}
            alt={`${car.brand} ${car.model}`}
            css={fvrt.img}
          />
          <div css={fvrt.wrapper}>
            <h3 css={[fvrt.name, font.TEXT2, clrs.GRAY4]}>{car.brand} {car.model}</h3>
            <p css={[fvrt.desc, font.TEXT5, clrs.GRAY3]}>{car.description}</p>
            <div css={[fvrt.year, font.TEXT5, clrs.GRAY3]}>Год: {car.model_year}</div>
            <div css={[fvrt.colorCar, font.TEXT5, clrs.GRAY3]}>Цвет: {car.color}</div>
            <div css={[fvrt.price, font.TEXT3, clrs.GRAY4]}>от {car.price}</div>
            <div css={fvrt.btnWrapper}>
              <Button
                width="259px"
                height="56px"
                radius="5px"
                children="Выбрать комплектацию"
                margin="0 20px 0 0"
              />
              <div css={fvrt.iconsBg} onClick={() => { favoriteCarsStore.removeCars(car) }}>
                {Icons.delete()}
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
});


export default Cars;