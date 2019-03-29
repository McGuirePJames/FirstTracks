import '../NavigationBar/_navigationBar.scss';
import React from 'react';
import { NavigationLink } from '../../Models/NavigationLink/NavigationLink';
import Link from '../Link/Link';

export interface Props {
    navigationItems: NavigationLink[];
}

export interface State {

}

export class NavigationBar extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    public render(){
        return (
            <div className="navigation-bar">
                {
                    this.props.navigationItems.map((navigationItem: NavigationLink, i:number) => {
                        return (
                            <Link link={navigationItem} key={i} />
                        )
                    })
                }
            </div>
        )
    }
}

export default NavigationBar