import React, { ReactElement, Component } from "react";
import './_gridContainer.scss';
import GridContainer from "../GridContainer/GridContainer";

export interface Props {

}

export interface State {

}

export class SnowfallByMonthChart extends Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }


    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="snowfall-by-month-chart">
                <GridContainer>

                </GridContainer>
            </div>
        );
    }
}
export default SnowfallByMonthChart;