import '../SkiResortImageCard/_skiResortImageCard.scss';
import React from 'react';
import { SkiResort } from '../../Models/SkiResort/SkiResort';
import RatingIcon from '../RatingIcon/RatingIcon';

export interface Props {
    skiResort: SkiResort;
}

export interface State {

}

export class SkiResortImageCard extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    public render() {
        return (
            <div className="image-card">
                <img className="image-card__image" src={this.props.skiResort.imageFilePath} />
                <div className="image-card__details">
                    <div className="image-card__top">
                        <p className="image-card__name">{this.props.skiResort.name}</p>
                        <div className="image-card__rating">
                            <RatingIcon filledState={0} />
                            <RatingIcon filledState={25} />
                            <RatingIcon filledState={50} />
                            <RatingIcon filledState={75} />
                            <RatingIcon filledState={100} />
                        </div>
                    </div>
                    <div className="image-card__middle">
                    </div>
                    <div className="image-card__bottom">
                    </div>
                </div>
            </div>
        )
    }
}

export default SkiResortImageCard