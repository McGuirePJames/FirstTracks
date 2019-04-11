import React, { ReactElement } from "react";
import '../Button/_button.scss';
export interface Props {
    text: string;
    onClickCustom: Function;
    size: "small" | "medium" | "large" | "godzilla";
}
export interface State {
}
export declare class Button extends React.Component<Props & React.HTMLAttributes<HTMLButtonElement>, State> {
    constructor(props: Props);
    render(): ReactElement<HTMLDivElement>;
}
