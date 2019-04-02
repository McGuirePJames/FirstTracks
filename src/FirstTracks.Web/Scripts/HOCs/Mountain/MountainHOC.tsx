import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Mountain/_mountain.scss';
//import { SkiResort } from "../../Models/SkiResort/SkiResort";


export interface Props {
    //skiResort: SkiResort;
}

export interface State {

}

export class MountainHOC extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="mountain-hoc">

            </div>
        );
    }
}
