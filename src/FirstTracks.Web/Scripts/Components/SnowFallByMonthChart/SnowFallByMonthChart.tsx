import React, { ReactElement, Component } from "react";
import GridContainer from "../GridContainer/GridContainer";
import SkiResortSnowfall from "../../Models/SkiResortSnowfall/SkiResortSnowfall";
import '../SnowfallByMonthChart/_snowfallByMonthChart.scss';
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

export interface Props {
    skiResortSnowfall: SkiResortSnowfall[];
}

export interface State {

}

export class SnowfallByMonthChart extends Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    private getLineChartData = (): ChartData => {
        const data: ChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: "Snowfall",
                data: [
                    this.props.skiResortSnowfall.filter(x => x.month === 1)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 2)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 3)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 4)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 5)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 6)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 7)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 8)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 9)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 10)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 11)[0].inches,
                    this.props.skiResortSnowfall.filter(x => x.month === 12)[0].inches,
                ],
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
            }
            ]
        }

        return data;
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="snowfall-by-month-chart">
                <GridContainer>
                    <div className="chart-container">
                        <Line data={this.getLineChartData()}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    position: "top",
                                    text: 'Snowfall For Park City',
                                    fontSize: 18,
                                    fontColor: "#111"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom",
                                    labels: {
                                        fontColor: "#333",
                                        fontSize: 16
                                    }
                                }
                            }}
                            legend={{
                                labels: {
                                    fontSize: 10
                                }
                            }}
                        />
                    </div>
                </GridContainer>
            </div>
        );
    }
}
export default SnowfallByMonthChart;