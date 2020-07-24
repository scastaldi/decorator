export function logMethod(
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor): PropertyDescriptor {

    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {

        // convert list of greet arguments to string
        const params = args.map(a => JSON.stringify(a)).join();

        // invoke greet() and get its return value
        const result = method.apply(this, args);

        // convert result to string
        const r = JSON.stringify(result);

        // display in console the function call details
        console.log(`Call: ${propertyName}(${params}) => ${r}`);

        // return the result of invoking the method
        return result;
    }
    return propertyDescriptor;
};


// function simpleLog(target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     console.log(`called function:${propertyKey}`);
//     return null;
// }

export class SampleLog {
    // @simpleLog
    // hello(message: string) {
    //     return 'Hello from Tampa';
    // }

    @logMethod
    helloPlus(message: string) {
        return 'Hello from Tampa';
    }
}

const sample = new SampleLog();
// sample.hello('Hi there');
sample.helloPlus('Again')

