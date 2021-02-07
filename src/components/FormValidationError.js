import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/form-validation-error.css";

export default function FormValidationError(props) {
  if (props.message) {
    return (
      <div className="error">
        <FontAwesomeIcon icon={faTimesCircle} className="X" />{" "}
        <strong>{props.message}</strong>
      </div>
    );
  }
  return <></>;
}

FormValidationError.propTypes = {
  message: PropTypes.string,
};
