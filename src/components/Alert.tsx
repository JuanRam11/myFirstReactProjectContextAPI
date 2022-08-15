import React, { Fragment, useContext } from 'react';
import AlertContext from '../context/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert }: any = alertContext;

  if (alert !== null) {
    return (
      <Fragment>
        <div className='alert alert-warning' role='alert'>
          Please, Type Something...
        </div>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Alert;
