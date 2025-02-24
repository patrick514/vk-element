export type AlertType = 'success' | 'warning' | 'danger' | 'info';
export type AlertEffect = 'light' | 'dark';
export interface AlertProps{
    // content?:string,
    type?:AlertType ,
    effect?:AlertEffect,
    closable?:boolean
}

export interface AlertEmits{
    (e:'close') : void;
}

