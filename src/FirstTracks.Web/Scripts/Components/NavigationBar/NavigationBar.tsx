import '../NavigationBar/_navigationBar.scss';
import React from 'react';
import { NavigationLink } from '../../Models/NavigationLink';

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
                            <div className="item" key={i}>
                                <a href={navigationItem.href}>{navigationItem.text}</a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default NavigationBar