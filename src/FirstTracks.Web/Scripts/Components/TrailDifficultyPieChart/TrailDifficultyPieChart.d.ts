import React, { ReactElement } from "react";
import '../TrailDifficultyPieChart/_trailDifficultyPieChart.scss';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
import { ChartData } from "chart.js";
export interface Props {
    skiResort: SkiResort;
}
export interface State {
}
export declare class TrailDifficultyPieChart extends React.Component<Props, State> {
    constructor(props: Props);
    getPieChartData: () => ChartData;
    render(): ReactElement<HTMLDivElement>;
}
export default TrailDifficultyPieChart;
