import { clrs } from "../../../styles/colors.styles";

export const stls = {

    search: {
        marginTop: '30px',
        position: 'relative',
        width: '24%',

        '@media screen and (max-width: 1279.99px)': {
            marginTop: '30px',
            width: '50%'
        },

        '@media screen and (max-width: 499.99px)': {
            marginTop: '30px',
            width: '100%'
        }
    } as const,

    input: {
        border: `1px solid ${clrs.GRAY2}`,
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
    } as const,

    iconsBg: {
        width: '24px',
        height: '24px',
        backgroundColor: clrs.BLUE2,
        borderRadius: '3px',
        position: 'absolute',
        top: '19%',
        right: '2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: clrs.BLUE3
        }
    } as const,
};