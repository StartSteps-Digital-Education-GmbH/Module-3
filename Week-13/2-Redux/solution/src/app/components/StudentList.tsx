"use client";

import React from 'react';
import { connect } from 'react-redux';
import { IStudent } from '../../../src/app/interface';
import { deleteStudent } from '../../../store/action';
import { StudentState } from '../../../store/reducer';

interface StudentListProps {
  students: IStudent[];
  deleteStudent: (id: number) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, deleteStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Hobby: {student.hobby}</p>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StudentState) => ({
  students: state.students,
});

const mapDispatchToProps = {
  deleteStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
