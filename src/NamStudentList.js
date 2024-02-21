import React,{useState} from "react";

function Namlist(){

    const[students, setStudents] = useState([
        { id : 0, name : 'Kulu', age : 24},
        {id : 1, name : 'Son', age : 30},
        {id : 2, name : 'Maddison', age : 30}
    ]);
    

    const [newStudentName , setNewStudentName]= useState('');
    const [newStudentAge , setNewStudentAge]= useState('');
    const [editingStudent,setEditingStudent]=useState(null);
    const addStudent = ()=>{
        const id = students.length > 0 ? students[students.length-1].id+1:1;
        setStudents([...students,{id,name:newStudentName,age:newStudentAge}]);
        setNewStudentAge('');
        setNewStudentName('');
    };
    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id!=id));
    };
    const editStudent = (student) =>{
        setEditingStudent(student);
        setNewStudentName(student.name);
        setNewStudentAge(student.age);
    };
    const editStudentSave = () => {
        setStudents(students.map(student =>
            student.id===editingStudent.id?{...student,name:newStudentName,age:newStudentAge}:student
            ));
        setEditingStudent(null);
    };
    const editStudentCancel = () => {
        setEditingStudent(null);
        setNewStudentAge('');
        setNewStudentName('');
    }

    return(
        <div>
            <h2>Student mangagement</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student=>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                                
                                <button onClick={() => editStudent(student)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div>
                <input type="text" value={newStudentName} placeholder="Name" onChange={(e) => setNewStudentName(e.target.value)}>
                </input>
                <input type="number" value={newStudentAge} placeholder="Age" onChange={(e) => setNewStudentAge(e.target.value)}>
                </input>
                {editingStudent ?(
                    <>
                    <button onClick={editStudentSave}>save</button>
                    <button onClick={editStudentCancel}>cancle</button>
                    </>
                ) :
                (<button onClick={addStudent}>Add student</button>)}
            </div>
            
        </div>
    );
}
export default Namlist;