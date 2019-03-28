import '../Link/_link.scss';
import React, { ReactElement } from 'react';
import { NavigationLink } from '../../Models/NavigationLink';

export interface Props {
    link: NavigationLink;
}

export interface State {

}

export class Link extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="link">
                <a href={this.props.link.href}>{this.props.link.text}</a>
            </div>
        )
    }
}

export default Link