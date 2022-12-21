const Button = ({btnStyle,children,style,gogo}) => {
    const customBtn = {
        backgroundColor: "grey",
        border: 'none',
        color: '#fff',
        fontSize: '19px',
        padding: '15px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '7px',
        display: 'block',
        margin: '5px auto'
    }



    return (
        <button style={{...customBtn,...btnStyle,...style}} onClick={gogo}>{children}</button>
    )
}

export default Button