import React, { useReducer } from 'react';
import { REMOVE_ALERT, SET_ALERT } from './types';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = (props: any) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const onAlert = (msg: string, type: any) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    //Remove alert after 5 seg
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        onAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
