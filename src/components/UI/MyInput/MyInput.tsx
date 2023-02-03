import Input from 'antd/es/input/Input';
import React from 'react';

interface IMyInput {
    placeholder: string
    onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>):void
    value: string
}

const MyInput:React.FC <IMyInput> = (props) => {
    return (
        <Input {...props} />
    );
};

export default MyInput;