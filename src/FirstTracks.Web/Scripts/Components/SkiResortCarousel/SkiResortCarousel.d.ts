import React, { ReactElement } from 'react';
import { SkiResort } from '../../Models/SkiResort/SkiResort';
import '../SkiResortCarousel/_skiResortCarousel.scss';
export interface Props {
    skiResorts: SkiResort[];
}
export interface State {
}
export declare class SkiResortCarousel extends React.Component<Props, State> {
    constructor(props: Props);
    render(): ReactElement<HTMLDivElement>;
}
