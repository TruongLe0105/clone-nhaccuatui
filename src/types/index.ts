import { ClassElement } from "typescript";

export interface OptionsCard {
    showOption: boolean;
    setShowOption: any;
    classOption?: string;
    isPlayList?: boolean;
}

export interface CardListProp {
    title?: string;
    data: any;
    comp: string;
}