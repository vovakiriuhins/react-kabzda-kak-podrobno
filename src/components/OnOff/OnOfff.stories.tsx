import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {OnOfff} from './OnOfff';

export default {
    title: 'OnOfff',
    component: OnOfff,
};
const callBack = 'on or off clicked'
export const OnMode = () => <OnOfff on={true} onChange={action(callBack)}/>
export const OffMode = () => <OnOfff on={false} onChange={action(callBack)}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOfff on={value} onChange={setValue} />
};