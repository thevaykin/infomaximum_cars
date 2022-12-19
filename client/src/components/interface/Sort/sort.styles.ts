export const stls = {
    sort: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: '30px'
    },

    arrows: {
        marginRight: '12px'
    },

    select: {
        border: 'none',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        textOverflow: '',
        'appearance': 'none' as const,
        ":focus": {
            outline: 'none !important',
            boxShadow: 'none !important'
        },
        fontFamily: 'inherit',
        letterSpacing: 'inherit',
        wordSpacing: 'inherit',
        marginTop : '-2px',
    },

    option: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#000',
    }
};

