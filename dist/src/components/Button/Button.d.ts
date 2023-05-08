interface IButton {
    text: string;
    onClick: () => void;
}
export declare const Button: ({ text, onClick }: IButton) => JSX.Element;
export {};
