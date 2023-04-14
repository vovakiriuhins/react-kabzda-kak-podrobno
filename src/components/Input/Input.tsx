import React, {FC} from 'react';

export type InputPropsType = {
    value?: string
}


export const Input: FC<InputPropsType> = () => {
    return (
        <div>
          <input type="text"/>
        </div>
    );
};
