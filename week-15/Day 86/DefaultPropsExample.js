function Student(props){

    return(

        <h1>Hello {props.name}</h1>

    );

}

Student.defaultProps = {

    name: "Guest User"

};

export default Student;

/*
Output
Hello Guest User
*/

/*
Explanation
Student.defaultProps

sets default values for props.
*/