import { clrs } from "../../styles/colors.styles";

export const stls = {
    header: {
        borderBottom: `1px solid ${clrs.GRAY2}`,
        background: clrs.GRAY0,
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '70px',
        marginBottom: '46px',

    },

    logo: {
        marginTop: '3px',
    },

    left: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 0.021
    },

    burger: {
        marginRight: '7px',
    },

    btnList: {
        '@media screen and (max-width: 1279.99px)': {
            display: 'none'
        }
    },

    right: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 0.1
    },

    address: {
        textDecoration: 'none',
        marginRight: '30px',
        color: clrs.GRAY4,
        ":hover": {
            color: clrs.BLUE3
        },

        '@media screen and (max-width: 1279.99px)': {
            display: 'none'
        }
    },

    phone: {
        textDecoration: 'none',
        color: clrs.GRAY4,
        ":hover": {
            color: clrs.BLUE3
        },

        '@media screen and (max-width: 1279.99px)': {
            display: 'none'
        }
    },

    favorite: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    like: {
        marginRight: '12px',
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

    favorite_text: {
        color: clrs.GRAY4,
        ":hover": {
            color: clrs.BLUE3
        }
    },
};