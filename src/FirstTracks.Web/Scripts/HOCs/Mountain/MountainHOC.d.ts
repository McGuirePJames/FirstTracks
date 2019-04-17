import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Mountain/_mountainHOC.scss';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
import { ChartData } from "chart.js";
export interface Props {
}
export interface State {
    skiResort: SkiResort | null;
}
export declare class MountainHOC extends React.Component<Props, State> {
    constructor(props: Props);
    getPieChartData: () => ChartData;
    setSkiResort: () => void;
    componentWillMount(): void;
    render(): ReactElement<HTMLDivElement>;
}
