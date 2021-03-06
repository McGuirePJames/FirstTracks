﻿import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Mountain/_mountainHOC.scss';
import { RequestParameters, RequestResponse, request } from "../../Common/request";
import { getQueryStringParameter } from '../../Common/getQueryStringParameter';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
import { ChartData } from "chart.js";
import TrailDifficultyPieChart from "../../Components/TrailDifficultyPieChart/TrailDifficultyPieChart";
import SkiResortSnowfall from '../../Models/SkiResortSnowfall/SkiResortSnowfall';
import { SnowfallByMonthChart } from "../../Components/SnowfallByMonthChart/SnowfallByMonthChart";


export interface Props {

}

export interface State {
    skiResort: SkiResort | null;
    skiResortSnowfall: SkiResortSnowfall[];
}

export class MountainHOC extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            skiResort: null,
            skiResortSnowfall: []
        };
    }

    public getPieChartData = () => {
        console.log(this.state.skiResort!.trails.filter(x => x['difficulty'] === 'Beginner').length);
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
                        this.state.skiResort!.trails.filter(x => x['difficulty'] === 'Beginner').length,
                        this.state.skiResort!.trails.filter(x => x['difficulty'] === 'Intermediate').length,
                        this.state.skiResort!.trails.filter(x => x['difficulty'] === 'Advanced').length,
                        this.state.skiResort!.trails.filter(x => x['difficulty'] === 'Expert').length
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

    public setSkiResort = (): void => {
        const skiResortId = getQueryStringParameter(window.location, "skiResortId");
        const parameters: RequestParameters = {
            type: "GET",
            url: "https://localhost:44347/api/SkiResort/GetSkiResortAsync",
            data: [{ "skiResortId": skiResortId }],
            headers: null
        };

        request(parameters).then((response: RequestResponse) => {
            this.setState({
                skiResort: (JSON.parse(response.response)) as SkiResort
            });
        });
    }

    public setSkiResortSnowfall = (): void => {
        const skiResortId = getQueryStringParameter(window.location, "skiResortId");
        const parameters: RequestParameters = {
            type: "GET",
            url: "https://localhost:44347/api/SkiResortSnowfall/GetSkiResortSnowfallAsync",
            data: [{ "skiResortId": skiResortId }],
            headers: null
        };

        request(parameters).then((response: RequestResponse) => {
            this.setState({
                skiResortSnowfall: (JSON.parse(response.response)) as SkiResortSnowfall[]
            });
        });
    }

    public componentWillMount(): void {
        this.setSkiResort();
        this.setSkiResortSnowfall();
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="mountain-hoc">
                {
                    this.state.skiResort !== null ?
                        (
                            <TrailDifficultyPieChart
                                skiResort={this.state.skiResort}
                            />
                        )
                        :
                        null

                }
                {
                    this.state.skiResortSnowfall.length > 0 ?
                        (
                            <SnowfallByMonthChart skiResortSnowfall={this.state.skiResortSnowfall} />
                        )
                        :
                        null

                }

            </div>
        );
    }
}
