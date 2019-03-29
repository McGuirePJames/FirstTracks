export class NavigationLink {
    href: string;
    text: string;
    iconPath: string | null;

    constructor(href: string, text: string, iconPath: string | null) {
        this.href = href;
        this.text = text;
        this.iconPath = iconPath;
    }
}