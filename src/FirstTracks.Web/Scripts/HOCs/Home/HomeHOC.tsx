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
            <div>
                Hello World
            </div>
        )
    }
}

export default HomeHOC