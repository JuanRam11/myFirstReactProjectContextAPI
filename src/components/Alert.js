import React, { Fragment, useContext } from "react";
import AlertContext from "../context/alertContext";

function Alert() {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <Fragment>
        <div className="alert alert-warning" role="alert">
          Please, Type Something...
        </div>
      </Fragment>
    )
  );
}

export default Alert;
