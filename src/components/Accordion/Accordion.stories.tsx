import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callBack = "accordion mode changed"

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const propsOnChange = {
    onChange: ()=>{}
}


export const MenuCollapsed = Template.bind({})
MenuCollapsed.args = {
    ...propsOnChange,
    titleValue: "Users",
    collapsed: true,
}


export const MenuCollapsed2 = Template.bind({})
MenuCollapsed2.args = {
    ...propsOnChange,
    titleValue: "Users",
    collapsed: false,
}


// export const CollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} onChange={()=>{}}/>
// export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={()=>{}}/>

export const CollapsedChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
};