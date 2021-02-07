import React from "react";
import PropTypes from "prop-types";

export default function FormValidationError(props) {
  if (props.message) {
    return (
      <div className="error">
        <strong>{props.message}</strong>
      </div>
    );
  } 
  return <></>;
}

FormValidationError.propTypes = {
  message: PropTypes.string,
};
