declare const FRAGMENT = "FRAGMENT";

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any; // Support all standard HTML tags
    }
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
