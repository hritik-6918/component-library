import React from 'react';
export interface ButtonProps {
    text: string;
    onClick: () => void;
}
export declare const Button: React.FC<ButtonProps>;
