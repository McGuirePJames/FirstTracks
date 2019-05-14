import { ReactElement, Component } from "react";
import SkiResortSnowfall from "../../Models/SkiResortSnowfall/SkiResortSnowfall";
import '../SnowfallByMonthChart/_snowfallByMonthChart.scss';
export interface Props {
    skiResortSnowfall: SkiResortSnowfall[];
}
export interface State {
}
export declare class SnowfallByMonthChart extends Component<Props, State> {
    constructor(props: Props);
    private getLineChartData;
    render(): ReactElement<HTMLDivElement>;
}
export default SnowfallByMonthChart;
