import React, { ReactElement, Component } from "react";
import './_gridContainer.scss';

export interface Props {

}

export interface State {

}

export class GridContainer extends Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }


    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="grid-container">
                {this.props.children}
            </div>
        );
    }
}
export default GridContainer;