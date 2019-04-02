import '../RatingIcon/_ratingIcon.scss';
import React, { ReactElement } from 'react';
export interface Props {
    filledState: 0 | 25 | 50 | 75 | 100;
}
export interface State {
}
export declare class RatingIcon extends React.Component<Props, State> {
    private _refMount;
    constructor(props: Props);
    private getSvgElement;
    private addRating;
    componentDidMount(): void;
    render(): ReactElement<HTMLElement>;
}
