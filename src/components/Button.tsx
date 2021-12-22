import React from "react";

type btnProps = {
  class: string,
  id: string,
  value: string,
  onClick: () => void;
}

const Button = (props: btnProps) => {
  return (
    <button className={props.class} id={props.id} onClick={props.onClick}>{props.value}</button>
  )
}

export default Button;