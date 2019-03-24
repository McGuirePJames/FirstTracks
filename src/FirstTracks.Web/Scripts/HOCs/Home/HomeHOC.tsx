import React, { ReactElement } from "react";
import { request, RequestParameters, RequestResponse } from '../../Common/request';

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

    private createUser = (): void => {
        const parameters: RequestParameters = {
            type: "POST",
            url: "https://localhost:44347/api/Account/CreateUser",
            data: [{ "emailAddress": "HelloWorld@bla.com" }, { "password": "SuperSecurePassword1234!" }],
            headers: null
        }
        request(parameters).then((response: RequestResponse) => {
            console.log(response.response);
        })
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="home-hoc">
                <button type="button" onClick={() => { this.createUser() }}>My Button</button>
            </div>
        )
    }
}

export default HomeHOC