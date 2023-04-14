import {Input} from "./Input";
import React, {ChangeEvent, useState} from "react";

export default {
  value: 'Input',
  component: Input,
};

export const UncontrolledInput = () => <Input />
export const TrackValueOfControlledInput = () => {
  const [value, setValue] = useState("")
  return <><Input onChange={(event: ChangeEvent<HTMLInputElement>)=>{
    const actualValue = event.currentTarget.value;
    setValue(actualValue)
  }
  }/> - {value}</>
}


export const ControlledInputWithFixedValue = () => <Input value={"it-incubator"}/>