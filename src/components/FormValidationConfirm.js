import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/form-validation-confirm.css";

export default function FormValidationConfirm(props) {
  if (props.message) {
    return (
      <div className="confirm">
        <FontAwesomeIcon icon={faCheckCircle} className="check" />{" "}
        <strong>{props.message}</strong>
      </div>
    );
  }
  return <></>;
}

FormValidationConfirm.propTypes = {
  message: PropTypes.bool,
};
