import React, { ReactElement } from "react";
import { request, RequestParameters, RequestResponse } from '../../Common/request';
import '../../../Stylesheets/global.scss';
import { Button } from "../../Components/Button/Button";
import '../Home/_homeHOC.scss';
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";
import { NavigationLink } from "../../Models/NavigationLink/NavigationLink";
import { SkiResortImageCard } from "../../Components/SkiResortImageCard/SkiResortImageCard";
import { SkiResort } from "../../Models/SkiResort/SkiResort";

export interface Props {

}

export interface State {

}

export class HomeHOC extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    //private getMountain = async () => {
    //    const parameters: RequestParameters = {
    //        type: "GET",
    //        url: "https://localhost:44347/api/Mountain/GetMountainAsync",
    //        data: [
    //            { 'mountainId':'36CCE9CC-04DE-4692-9509-B5E82DDA2B79' },
    //        ],
    //        headers: null
    //    };
    //    const requestResponse: RequestResponse = await request(parameters);  
    //    console.log(requestResponse.response);
    //}

    private getMountain = async () => {
        const parameters: RequestParameters = {
            type: "GET",
            url: "https://localhost:44347/api/Mountain/GetMountainsAsync",
            data: null,
            headers: null
        };
        const requestResponse: RequestResponse = await request(parameters);
        console.log(requestResponse.response);
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
                                        new NavigationLink("/Mountains", "Mountains", null),
                                        new NavigationLink("/Forums", "Forums", null),
                                        new NavigationLink("/AboutUs", "About Us", null)
                                    ]
                                } />
                            </div>
                        </div>
                        <div className="welcome__slogan-container">
                            <p className="welcome__slogan">Be The</p>
                            <p className="welcome__slogan">First</p>
                            <p className="welcome__slogan">On The Slopes</p>
                        </div>
                        <div className="welcome__button-container">
                            <Button size="godzilla" text="Find Users" onClick={this.getMountain} />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2 className="section__title">Recommended Mountains</h2>
                    <div className="mountains">
                        <div className="mountain">
                            <SkiResortImageCard
                                skiResort={new SkiResort("Park City", "Park City", "UT", "/images/Steamboat.jpg", "#", 0, ["Trees", "Bowls"])}
                            />
                        </div>
                        <div className="mountain">
                            <SkiResortImageCard
                                skiResort={new SkiResort("Park City", "Park City", "UT", "/images/Steamboat.jpg", "#", 0, ["Trees", "Bowls"])}
                            />
                        </div>
                        <div className="mountain">
                            <SkiResortImageCard
                                skiResort={new SkiResort("Park City", "Park City", "UT", "/images/Steamboat.jpg", "#", 0, ["Trees", "Bowls"])}
                            />
                        </div>
                        <div className="mountain">
                            <SkiResortImageCard
                                skiResort={new SkiResort("Park City", "Park City", "UT", "/images/Steamboat.jpg", "#", 0, ["Trees", "Bowls"])}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
