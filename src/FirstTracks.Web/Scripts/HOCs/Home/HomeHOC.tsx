import React, { ReactElement } from "react";
import { request, RequestParameters, RequestResponse } from '../../Common/request';
import '../../../Stylesheets/global.scss';
import { Button } from "../../Components/Button/Button";

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
            data: [
                {"emailAddress": "HelloWorld@bla.com" },
                {"password": "SuperSecurePassword1234!"}
            ],
            headers: null
        }
        request(parameters).then((response: RequestResponse) => {
            console.log(response.response);
        })
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="home-hoc">
                <Button buttonText="Create User" onClick={this.createUser} />
            </div>
        )
    }
}

export default HomeHOC