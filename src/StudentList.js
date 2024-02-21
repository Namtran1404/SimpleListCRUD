// StudentList.js
import React, { useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Doe', age: 22 },
    { id: 3, name: 'Alice', age: 21 }
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAge, setNewStudentAge] = useState('');

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setNewStudentName(student.name);
    setNewStudentAge(student.age);
  };

  const handleSaveEdit = () => {
    setStudents(students.map(student =>
      student.id === editingStudent.id ? { ...student, name: newStudentName, age: newStudentAge } : student
    ));
    setEditingStudent(null);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const handleAdd = () => {
    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    setStudents([...students, { id, name: newStudentName, age: newStudentAge }]);
    setNewStudentName('');
    setNewStudentAge('');
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table>
        <thead>
            
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Xóa</button>
                <button onClick={() => handleEdit(student)}>Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          value={newStudentName}
          placeholder="Tên"
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <input
          type="number"
          value={newStudentAge}
          placeholder="Tuổi"
          onChange={(e) => setNewStudentAge(e.target.value)}
        />
        {editingStudent ? (
          <>
            <button onClick={handleSaveEdit}>Lưu</button>
            <button onClick={handleCancelEdit}>Hủy</button>
          </>
        ) : (
          <button onClick={handleAdd}>Thêm mới</button>
        )}
      </div>
    </div>
  );
}

export default StudentList;