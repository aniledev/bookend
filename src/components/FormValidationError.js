import React from "react";

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
