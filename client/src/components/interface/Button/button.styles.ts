import { clrs } from "../../../styles/colors.styles";

export const btns = {
    color: clrs.GRAY0,
    backgroundColor: clrs.BLUE2,
    border: 'none',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    ":hover": {
        backgroundColor: clrs.BLUE3
    },

    ":disabled": {
        color: clrs.GRAY4,
        backgroundColor: clrs.GRAY2,
        cursor: 'not-allowed',
        border: 'none',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ":active": {
        backgroundColor: clrs.BLUE4
    },
};
