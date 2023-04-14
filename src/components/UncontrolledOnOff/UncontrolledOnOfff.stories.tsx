import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};
const callBack = 'on or off clicked'

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onchange={callBack}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const BugMode = () => <div>Unsync when</div>
export const GefaultImputValue = () => <input defaultValue={"yo"}/>