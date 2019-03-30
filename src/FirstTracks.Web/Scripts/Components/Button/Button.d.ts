import React, { ReactElement } from "react";
import '../Button/_button.scss';
export interface Props {
    text: string;
    onClick: Function;
    size: "small" | "medium" | "large" | "godzilla";
}
export interface State {
}
export declare class Button extends React.Component<Props, State> {
    constructor(props: Props);
    render(): ReactElement<HTMLDivElement>;
}
