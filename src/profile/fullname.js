import proptype from 'prop-types'
function fullname(props){
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )

}
fullname.prototype={
name: proptype.string
}
export default fullname