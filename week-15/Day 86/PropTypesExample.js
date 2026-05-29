import PropTypes from "prop-types";

function Employee(props){

    return(

        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    );

}

Employee.propTypes = {

    name: PropTypes.string,
    age: PropTypes.number

};

export default Employee;