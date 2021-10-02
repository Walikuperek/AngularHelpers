import { INum } from '../models/Inum';

export const num: INum = {
    isEven(numberToCheck: number): boolean {
        return numberToCheck % 2 === 0 ? true : false;
    },
    rand: {
        between(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};
