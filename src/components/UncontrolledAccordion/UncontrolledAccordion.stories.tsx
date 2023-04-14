import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};
const callBack = "accordion mode changed"

export const CollapsedChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>
};