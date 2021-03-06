import '../SkiResortImageCard/_skiResortImageCard.scss';
import React from 'react';
import { SkiResort } from '../../Models/SkiResort/SkiResort';
import { RatingIcon } from '../RatingIcon/RatingIcon';

export interface Props {
    skiResort: SkiResort;
}

export interface State {

}

export class SkiResortImageCard extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    private handleImageCardClick = (): void => {
        window.location.href = `/Mountain?skiResortId=${this.props.skiResort.skiResortId}`;
    }

    public render() {
        return (
            <div className="image-card" onClick={this.handleImageCardClick}>
                <img className="image-card__image" src={this.props.skiResort.imagePath} />
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
                                this.props.skiResort.tags !== null && this.props.skiResort.tags !== undefined ? (
                                    this.props.skiResort.tags.map((tag: string, i: number) => {
                                        return (
                                            <div className="image-card__tag" key={i}>
                                                {tag}
                                            </div>
                                        );
                                    })
                                )
                                    : null
                            }
                        </div>

                    </div>
                    <div className="image-card__bottom">
                        <a className="image-card__learn-more" href={this.props.skiResort.mountainHref}>Learn More</a>
                    </div>
                </div>
            </div>
        );
    }
}
