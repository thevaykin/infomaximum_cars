import { FC, useEffect, useState } from "react";
import carsService from "../../../Api/fetchCars";
import { Icons } from "../../../icons/Icons";
import { font } from "../../../styles/font.styles";
import useDebounce from "../../hooks/useDebounse";
import { stls } from "./search.styles";

const Search: FC = () => {
    const [query, setQuery] = useState("");
    const debouncedSearch = useDebounce(query, 500);

    useEffect(() => {
        carsService.getCarsList(debouncedSearch);
    }, [debouncedSearch]);
    return (
        <div css={stls.search}>
            <input
                onChange={(event: any) => setQuery(event.target.value)}
                value={query}
                placeholder={"Найти авто"}
                css={[stls.input, font.TEXT5]}
            />
            <div css={stls.iconsBg}>
                {Icons.search()}
            </div>
        </div>
    );
};

export default Search;