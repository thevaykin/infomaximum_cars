import { FC } from "react";
import { observer } from "mobx-react-lite";
import carsListStore from "../store/carsListStore";
import { carsList } from "./carsList.styles";
import Button from "../interface/Button/Button";
import { Icons } from "../../icons/Icons";
import favoriteCarsStore from "../store/favoriteCarsStore";
import { font } from "../../styles/font.styles";
import checkIdsStore from "../store/checkIdsStore";



const Cars: FC = observer(() => {

  return (
    <>
      <div css={carsList.cars}>
        {carsListStore.cars.map((car) => (
          <div key={car.id} css={carsList.car}>

            {
              !car.availability ? (
                <>
                  <img
                    src={`http://localhost:4000${car.img_src}`}
                    alt={`${car.brand} ${car.model}`}
                    css={carsList.carsImgUnavailable}
                  />
                  <div css={[carsList.unavailable, font.TEXT3]}>Нет в наличии</div>
                </>
              ) : (
                <img
                  src={`http://localhost:4000${car.img_src}`}
                  alt={`${car.brand} ${car.model}`}
                  css={carsList.cars__cardImg}
                />
              )
            }

            <div css={[carsList.name, font.TEXT3]}>
              {car.brand} {car.model}
            </div>

            <div css={[carsList.colorAndYear, font.TEXT5]}>
              <span css={carsList.year}>Год: {car.model_year}</span>
              <span css={carsList.color}>Цвет: {car.color}</span>
            </div>

            <div css={[carsList.price, font.TEXT4]}>
              от {car.price}
            </div>

            <div css={carsList.btns}>
              <Button
                height="56px"
                width="254px"
                value="Купить"
                radius="5px"
                margin="20px 0 0 0"
                availability={!car.availability}
              />
              {
                car.availability && !checkIdsStore.id.includes(car.id) ? (
                  <div
                    css={carsList.like}
                    onClick={() => { favoriteCarsStore.addCar(car) }}
                  >
                    {Icons.dislike()}
                  </div>
                ) : (
                  <div
                    css={carsList.like}
                    onClick={() => { favoriteCarsStore.removeCars(car) }}
                  >
                    {Icons.like()}
                  </div>
                )
              }
              {
                !car.availability && (
                  <div css={carsList.like}>
                    {Icons.mutedLike()}
                  </div>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </>
  );
});


export default Cars;