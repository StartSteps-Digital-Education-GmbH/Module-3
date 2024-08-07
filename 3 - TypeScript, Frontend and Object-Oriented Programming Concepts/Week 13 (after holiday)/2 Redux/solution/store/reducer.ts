import { IStudent } from '../src/app/interface';
import { StudentAction } from './action';

export interface StudentState {
  students: IStudent[];
}

const initialState: StudentState = {
  students: [
    { id: 1, name: 'John Doe', hobby: 'Reading' },
    { id: 2, name: 'Jane Smith', hobby: 'Painting' },
    { id: 3, name: 'David Brown', hobby: 'Gaming' },
  ],
};

const reducer = (
  state: StudentState = initialState,
  action: StudentAction
): StudentState => {
  switch (action.type) {
    case 'ADD_STUDENT':
      const newStudent: IStudent = {
        id: Math.random(),
        name: action.student.name,
        hobby: action.student.hobby,
        // Add other properties as needed
      };
      return {
        ...state,
        students: [...state.students, newStudent],
      };
    case 'DELETE_STUDENT':
      const updatedStudents: IStudent[] = state.students.filter(
        student => student.id !== action.id
      );
      return {
        ...state,
        students: updatedStudents,
      };
    default:
      return state;
  }
};

export default reducer;
