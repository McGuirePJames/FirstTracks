import React, { ReactElement } from "react";
import '../../../Stylesheets/global.scss';
import '../Mountain/_mountain.scss';
import { SkiResort } from "../../Models/SkiResort/SkiResort";
export interface Props {
}
export interface State {
    skiResort: SkiResort | null;
}
export declare class MountainHOC extends React.Component<Props, State> {
    constructor(props: Props);
    setSkiResort: () => void;
    componentWillMount(): void;
    render(): ReactElement<HTMLDivElement>;
}
