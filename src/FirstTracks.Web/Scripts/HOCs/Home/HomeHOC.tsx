import React, { ReactElement } from "react";
import { request, RequestParameters, RequestResponse } from '../../Common/request';
import '../../../Stylesheets/global.scss';
import { Button } from "../../Components/Button/Button";
import '../Home/_homeHOC.scss';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { NavigationLink } from "../../Models/NavigationLink";

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
                { "emailAddress": "HelloWorld@bla.com" },
                { "password": "SuperSecurePassword1234!" }
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
                <div className="welcome">
                    <div className="welcome__image-container">
                        <img className="welcome__image" src="/images/city.jpg" />
                    </div>
                    <div className="welcome__pieces">
                        <div className="welcome__navigation">
                            <div className="welcome__logo-container">
                                <img className="welcome__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png" />
                            </div>
                            <div className="welcome__navigation-container">
                                <NavigationBar navigationItems={
                                    [
                                        new NavigationLink("/Mountains", "Mountains"),
                                        new NavigationLink("/Forums", "Forums"),
                                        new NavigationLink("/AboutUs", "About Us")
                                    ]
                                } />
                            </div>
                        </div>
                        <div className="welcome__slogan-container">
                            <p className="welcome__slogan">Be The First On The Slopes</p>
                        </div>
                        <div className="welcome__button-container">
                            <Button buttonText="Find Users" onClick={this.createUser} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHOC