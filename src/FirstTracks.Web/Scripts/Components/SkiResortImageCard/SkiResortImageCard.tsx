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
                            <RatingIcon filledState={100} />
                            <RatingIcon filledState={100} />
                            <RatingIcon filledState={100} />
                            <RatingIcon filledState={50} />
                            <RatingIcon filledState={0} />
                        </div>
                    </div>
                    <div className="image-card__middle">
                        <div className="image-card__tags">
                            {
                                this.props.skiResort.tags.map((tag: string, i: number) => {
                                    return (
                                        <div className="image-card__tag" key={i}>
                                            {tag}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="image-card__bottom">
                        <button type="button" className="image-card__learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkiResortImageCard