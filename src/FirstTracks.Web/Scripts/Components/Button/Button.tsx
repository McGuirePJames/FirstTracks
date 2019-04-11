import React, { ReactElement } from "react";
import '../Button/_button.scss';

export interface Props {
    text: string;
    onClickCustom: Function;
    size: "small" | "medium" | "large" | "godzilla";
}

export interface State {

}

export class Button extends React.Component<Props & React.HTMLAttributes<HTMLButtonElement>, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <button type="button" className={"button " + this.props.size} onClick={() => { this.props.onClickCustom(); }}>{this.props.text}</button>
        );
    }
}