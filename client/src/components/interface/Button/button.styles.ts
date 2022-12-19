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
        backgroundColor: clrs.GRAY2,
        cursor: 'not-allowed',
    },

    ":active": {
        backgroundColor: clrs.BLUE4
    },
};
