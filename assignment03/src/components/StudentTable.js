import '../assets/css/compo.css'
export default function StudentTable(props){
    return(
        
          <div className="outerDiv">
            <div className="leftDiv">
                <table border={1}>
                    <thead>
                        <tr>
                            <td>first name</td>
                            <td>last name</td>
                            <td>course</td>
                            <td>country</td>
                            <td>profile</td>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            props.students.map((student, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.course}</td>
                                        <td>{student.address.country}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>       
    );
}