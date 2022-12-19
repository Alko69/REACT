

const MyHeader = ({children , myStyle}) => {
    
    return (
        <h1 style= {{color: myStyle }}>{children}</h1>
    )
}
export default MyHeader