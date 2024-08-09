import { IStudent } from '../src/app/interface';

export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export interface AddStudentAction {
  type: typeof ADD_STUDENT;
  student: IStudent;
}

export interface DeleteStudentAction {
  type: typeof DELETE_STUDENT;
  id: number;
}

export type StudentAction = AddStudentAction | DeleteStudentAction;

export const addStudent = (student: IStudent): AddStudentAction => ({
  type: ADD_STUDENT,
  student,
});

export const deleteStudent = (id: number): DeleteStudentAction => ({
  type: DELETE_STUDENT,
  id,
});
