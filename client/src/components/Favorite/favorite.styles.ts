import { clrs } from "../../styles/colors.styles";


export const fvrt = {
    title: {
        paddingBottom: '26px',
        borderBottom: `1px solid ${clrs.GRAY2}`
    },

    car: {
        paddingTop: '20px',
        display: 'flex',
        padding: '40px 0 30px 0',
        borderBottom: `1px solid ${clrs.GRAY2}`,

        '@media screen and (max-width: 899.99px)': {
            display: 'block'
        }
    },

    img: {
        border: `1px solid ${clrs.GRAY2}`,
        borderRadius: '12px',
        marginRight: '20px',
    },

    wrapper: {
        maxWidth: '835px'
    },

    name: {
        margin: '0px 0 16px 0',

    },

    desc: {
        margin: '0px 0 16px 0',
        maxHeight: '48px',
        'white-space': 'wrap' as const,
        'overflow': 'hidden',
        'text-overflow': 'ellipsis' as const
    },

    year: {
        margin: '0px 0 16px 0',
    },

    colorCar: {
        margin: '0px 0 34px 0',
    },

    price: {
        margin: '0px 0 21px 0',
    },

    btnWrapper: {
        display: 'flex'
    },

    iconsBg: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        width: '56px',
        height: '57px',
        border: `2px solid ${clrs.RED1}`,
        borderRadius: '5px',

        ':hover': {
            backgroundColor: clrs.RED1,
            cursor: 'pointer',
            'svg path': {
                fill: clrs.GRAY0,
            }
        },

        ':active': {
            background: clrs.RED2,
        }
    } as const
}