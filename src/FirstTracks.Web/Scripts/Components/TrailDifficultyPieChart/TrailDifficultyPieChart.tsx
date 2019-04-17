import React, { ReactElement } from "react";
import '../TrailDifficultyPieChart/_trailDifficultyPieChart.scss';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
import { Pie } from 'react-chartjs-2';
import { ChartData } from "chart.js";
import GridContainer from "../GridContainer/GridContainer";


export interface Props {
    skiResort: SkiResort;
}

export interface State {

}

export class TrailDifficultyPieChart extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            skiResort: null
        };
    }

    public getPieChartData = () => {
        const chartData: ChartData = {
            labels: [
                'Beginner',
                'Intermediate',
                'Advanced',
                'Expert'
            ],
            datasets: [
                {
                    data: [
                        this.props.skiResort!.trails.filter(x => x['difficulty'] === 'Beginner').length,
                        this.props.skiResort!.trails.filter(x => x['difficulty'] === 'Intermediate').length,
                        this.props.skiResort!.trails.filter(x => x['difficulty'] === 'Advanced').length,
                        this.props.skiResort!.trails.filter(x => x['difficulty'] === 'Expert').length
                    ],
                    backgroundColor: [
                        '#39B54A',
                        '#0F75BC',
                        '#B50000',
                        '#000000'
                    ],
                    hoverBackgroundColor: [
                        '#39B54A',
                        '#0F75BC',
                        '#B50000',
                        '#000000'
                    ]
                }
            ]

        }

        return chartData;
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="trail-difficulty-pie-chart">
                <GridContainer>
                    <div className="chart-container">
                        <Pie
                            data={this.getPieChartData()}
                            options={{
                                title: {
                                    text: "Trail Difficulty",
                                    fontSize: 20,
                                    display: true
                                },
                                layout: {
                                    padding: {
                                        left: 30,
                                        top: 30,
                                        right: 30,
                                        bottom: 30
                                    }
                                },
                                responsive: true,
                                maintainAspectRatio: false
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
export default TrailDifficultyPieChart;