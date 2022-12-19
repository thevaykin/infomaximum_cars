import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../icons/Icons";
import { stls } from "./header.styles";
import { font } from "../../styles/font.styles"
import Button from "../interface/Button/Button"

const Header: FC = () => {

    return (
        <header css={stls.header}>
            <div css={stls.left}>
                <NavLink to="/">
                    <div css={stls.logo}>
                        {Icons.logo()}
                    </div>
                </NavLink>
                <div css={stls.btnList}>
                    <Button
                        height={'36px'}
                        radius={'5px'}
                        onClick={() => console.log('hi')}
                        width={'135px'}
                        value={'Каталог'}

                    >
                        <div css={stls.burger}>
                            {Icons.burger()}
                        </div>
                    </Button>
                </div>

            </div>
            <div css={stls.right}>
                <div>
                    <a css={[stls.address, font.TEXT4]} href="https://www.google.ru/maps/place/Волгоградский+пр-т.,+43+строение+1,+Москва,+109316/@55.7154445,37.71761,17.25z/data=!4m5!3m4!1s0x414ab522fe8def41:0xfe31f7f2ad3c9106!8m2!3d55.715444!4d37.71962">Москва, Волгоградский пр-кт, 43, стр 1</a>
                    <a css={[stls.phone, font.TEXT4]} href="tel:+78005553535">+7 800 555 35 35</a>
                </div>
                <div>
                    <NavLink to="/favorite" css={stls.favorite}>
                        <div css={stls.like}>
                            {Icons.like()}
                        </div>
                        <span css={[stls.favorite_text, font.TEXT4]}>Избранное</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;