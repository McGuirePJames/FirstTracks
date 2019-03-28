import '../Link/_link.scss';
import React, { ReactElement } from 'react';
import { NavigationLink } from '../../Models/NavigationLink';
export interface Props {
    link: NavigationLink;
}
export interface State {
}
export declare class Link extends React.Component<Props, State> {
    constructor(props: Props);
    render(): ReactElement<HTMLDivElement>;
}
export default Link;
