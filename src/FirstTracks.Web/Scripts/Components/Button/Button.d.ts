import React, { ReactElement } from "react";
import '../Button/_button.scss';
export interface Props {
    buttonText: string;
    onClick: Function;
}
export interface State {
}
export declare class Button extends React.Component<Props, State> {
    constructor(props: Props);
    render(): ReactElement<HTMLDivElement>;
}
