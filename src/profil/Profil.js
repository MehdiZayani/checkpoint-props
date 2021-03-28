
function Showprofil (props){
console.log(props)
return (
    <div>
        <h1>{props.fullname}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
    
        {props.children}
        <h1>{props.handleName (props.fullname)}</h1>
    </div>
)

}

export default Showprofil