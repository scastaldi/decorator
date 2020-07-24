import { logMethod } from './logger';

export class Calculator {

    @logMethod
    public multiply(arg0: number, arg1: number): number {
        return arg0 * arg1;
    }

    @logMethod
    public divide(arg0: number, arg1: number): number {
        return arg0 / arg1;
    }

    @logMethod
    public subtract(arg0: number, arg1: number): number {
        return arg0 - arg1;
    }

    @logMethod
    public add(arg0: number, arg1: number): number {
        return arg0 + arg1;
    }

}
