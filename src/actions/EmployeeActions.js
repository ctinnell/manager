import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  //fake out redux thunk to think we are returning an action
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => Actions.employeeList({ type: 'reset' }));
  };
};
