import React from "react";
import "./form-input.styles.scss";
import {Group,Input,ForminputLabel} from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  console.log('heyyyy prinitng inside form-input',label)
  // console.log('heyyyy prinitng inside form-input',otherProps)

  return (
    // <div className="group">
    //   <input className="form-input" {...otherProps} />
    //   {label && (
    //     <label
    //       className={`${
    //         otherProps.value.length ? "shrink" : ""
    //       } form-input-label`}
    //     >
    //       {label}
    //     </label>
    //   )}
    // </div>
    <Group >
      <Input  {...otherProps} />
      {label && (
        <ForminputLabel shrink={otherProps.value.length}>
          {label}
        </ForminputLabel>
      )}
    </Group>
  );
};
export default FormInput;
