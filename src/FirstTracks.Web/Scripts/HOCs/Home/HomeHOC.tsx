import React, { ReactElement } from "react";

export interface Props {

}

export interface State {

}

export class HomeHOC extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="home-hoc">

            </div>
        )
    }
}

export default HomeHOC