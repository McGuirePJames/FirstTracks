import React, { ReactElement } from 'react';
import { SkiResortImageCard } from '../SkiResortImageCard/SkiResortImageCard';
import { SkiResort } from '../../Models/SkiResort/SkiResort';
import '../SkiResortCarousel/_skiResortCarousel.scss';

export interface Props {
    skiResorts: SkiResort[];
}

export interface State {

}

export class SkiResortCarousel extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    public render(): ReactElement<HTMLDivElement> {
        return (
            <div className="ski-resort-carousel">
                <div className="mountains">
                    {
                        this.props.skiResorts !== null && this.props.skiResorts !== undefined ? (
                            this.props.skiResorts.map((skiResort: SkiResort, i: number) => {
                                return (
                                    <div key={i} className="mountain">
                                        <SkiResortImageCard skiResort={skiResort} key={i} />
                                    </div>
                                );
                            })
                        )
                            : null

                    }
                </div>
            </div>
        );
    }
}
