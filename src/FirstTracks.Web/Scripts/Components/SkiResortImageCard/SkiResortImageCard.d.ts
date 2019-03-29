import '../SkiResortImageCard/_skiResortImageCard.scss';
import React from 'react';
import { SkiResort } from '../../Models/SkiResort/SkiResort';
export interface Props {
    skiResort: SkiResort;
}
export interface State {
}
export declare class SkiResortImageCard extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export default SkiResortImageCard;
