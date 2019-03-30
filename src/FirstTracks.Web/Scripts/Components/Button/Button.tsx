import React, { ReactElement } from "react";
import '../Button/_button.scss';

export interface Props {
    text: string;
    onClick: Function;
    size: "small" | "medium" | "large" | "godzilla"
}

export interface State {

}

export class Button extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <button type="button" className={"button " + this.props.size} onClick={() => { this.props.onClick() }}>{this.props.text}</button>
        )
    }
}