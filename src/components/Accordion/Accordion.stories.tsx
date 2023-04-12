import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
};
const callBack = "accordion mode changed"
export const CollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} onChange={()=>{}}/>
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={()=>{}}/>

export const CollapsedChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
};