import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Mountain/_mountain.scss';
import { RequestParameters, RequestResponse, request } from "../../Common/request";
import { getQueryStringParameter } from '../../Common/getQueryStringParameter';
import { SkiResort } from "../../Models/SkiResort/SkiResort";

export interface Props {
    //skiResort: SkiResort;
}

export interface State {
    skiResort: SkiResort | null;
}

export class MountainHOC extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            skiResort: null
        };
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

    public componentWillMount(): void {
        this.setSkiResort();
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="mountain-hoc">
                {
                    this.state.skiResort !== null ?
                        (
                            <p>{this.state.skiResort.name}</p>
                        )
                        : null
                }

            </div>
        );
    }
}
