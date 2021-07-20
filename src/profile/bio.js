import {Children} from "react"

function Bio(props){
    return (
       <div>
        <h4>Bio</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptates ea deserunt consectetur atque, id similique magni quos soluta architecto
         sunt numquam doloribus dolor vitae, aspernatur tempore, reiciendis consequatur quam.
        </p>
        {props.Children}
        </div>
    )
}
export default Bio