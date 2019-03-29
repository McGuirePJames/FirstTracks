import '../RatingIcon/_ratingIcon.scss';
import React, { createRef, RefObject, ReactElement } from 'react';


export interface Props {
    filledState: 0 | 25 | 50 | 75 | 100
}

export interface State {

}

export class RatingIcon extends React.Component<Props, State>{

    private _refMount: RefObject<HTMLDivElement> = createRef();

    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    private getSvgElement = (): Element => {
        //at the time of writing this, react does not support svg need to find better way to do this
        const svgString: string = '<div class="rating-icon-container"><svg class="rating-icon-source" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g id="ratingIconPath"><path d="M12 48 L56 48 L40 22 L36 32 L26 16 Z" /></g><linearGradient id="emptyGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="quarterGradient"><stop stop-opacity="1" offset="25%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="25%"></stop></linearGradient><linearGradient id="halfGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="halfQuarterGradient"><stop stop-opacity="1" offset="75%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="75%"></stop></linearGradient><linearGradient id="fullGradient"><stop stop-opacity="1" offset="100%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="100%"></stop></linearGradient></svg><div><svg class="rating-icons" viewBox="0 0 60 50"><use xlink: href="#ratingIconPath" class="rating-icon" x="0" y="0" /></svg></div></div>';
        const parser = new DOMParser();
        return parser.parseFromString(svgString, 'text/html').getElementsByClassName('rating-icon-container')[0];
    }

    private addRating = (svgElement: Element): Element => {
        const ratingIcon: Element = svgElement.getElementsByClassName('rating-icon')[0];

        switch (this.props.filledState) {
            case 0:
                ratingIcon.classList.add('rating-icon--empty');
                break;
            case 25:
                ratingIcon.classList.add('rating-icon--quarter');
                break;
            case 50:
                ratingIcon.classList.add('rating-icon--half');
                break;
            case 75:
                ratingIcon.classList.add('rating-icon--half-quarter');
                break;
            case 100:
                ratingIcon.classList.add('rating-icon--full');
                break;
            default:
                break;
        }

        return svgElement;
    }

    public componentDidMount() {
        const svg: Element = this.getSvgElement();
        const svgWithRating: Element = this.addRating(svg);
        this._refMount.current!.appendChild(svgWithRating);
    }

    public render():ReactElement<HTMLElement> {
        return (
            <div className="rating-icon-component" ref={this._refMount}>
            </div>
        )
    }
}

export default RatingIcon