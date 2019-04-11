import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Home/_homeHOC.scss';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
export interface Props {
}
export interface State {
    skiResorts: SkiResort[];
}
export declare class HomeHOC extends React.Component<Props, State> {
    constructor(props: Props);
    private setSkiResorts;
    componentDidMount: () => void;
    render(): ReactElement<HTMLDivElement>;
}
