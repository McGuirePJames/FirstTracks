import '../NavigationBar/_navigationBar.scss';
import React from 'react';
import { NavigationLink } from '../../Models/NavigationLink/NavigationLink';
export interface Props {
    navigationItems: NavigationLink[];
}
export interface State {
}
export declare class NavigationBar extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
