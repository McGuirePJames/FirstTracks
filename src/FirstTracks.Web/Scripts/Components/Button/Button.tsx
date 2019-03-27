import React, { ReactElement } from "react";
import '../Button/_button.scss';

export interface Props {
    buttonText: string;
    onClick: Function
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
            <button type="button" className="button" onClick={() => { this.props.onClick() }}>{this.props.buttonText}</button>
        )
    }
}