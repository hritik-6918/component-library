import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button, ButtonProps };
