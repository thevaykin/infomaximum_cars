import { clrs } from "../../styles/colors.styles";

export const carsList = {
    cars: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: 'wrap',
        paddingBottom: '70px',
        gap: '10px'
    } as const,

    car: {
        position: 'relative',
        margin: '50px 0 30px 0',
        maxWidth: "445px",
    } as const,

    unavailable: {
        position: 'absolute',
        width: '237px',
        height: '59px',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        color: clrs.GRAY0,
        background: clrs.GRAY4,
        borderRadius: '15px',
        top: '25%',
        left: '23%'
    } as const,

    carsImgUnavailable: {
        maxWidth: "100%",
        opacity: 0.5,
        border: "1px solid #D9D9D9",
        borderRadius: "15px 15px 0px 0px"
    },

    cars__cardImg: {
        maxWidth: "100%",
        border: "1px solid #D9D9D9",
        borderRadius: "15px 15px 0px 0px"
    },

    name: {
        marginTop: '20px',
        whiteSpace: 'nowrap' as const,
        'overflow': 'hidden',
        textOverflow: 'ellipsis' as const,

        '@media screen and (max-width: 499.99px)': {
            'overflow': 'hidden',
            textOverflow: 'inherit',
            whiteSpace: 'normal',
        }as const,
    },

    colorAndYear: {
        marginTop: '12px',
        maxWidth: "445px",
    },

    color: {
        color: clrs.GRAY3
    },

    year: {
        color: clrs.GRAY3,
        marginRight: '14px'
    },

    price: {
        marginTop: '12px',
    },

    btns: {
        display: 'flex'
    },

    like: {
        margin: '35px 0 0 25px',


        ':hover': {
            cursor: 'pointer',
            'svg path': {
                fill: clrs.BLUE3,
            }
        },

        ':active': {
            fill: clrs.BLUE4,
        }
    },

    mutedLike: {
        margin: '35px 0 0 25px',

        ':hover': {
            cursor: 'not-allowed',
        },
    }
};