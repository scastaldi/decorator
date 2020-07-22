export function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {

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
    return propertyDesciptor;
};


function simpleLog(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`
        target:${JSON.stringify(target)}, 
        propertyKey:${propertyKey}, 
        descriptor:${JSON.stringify(descriptor)}`);

}


class SampleLog {
    @logMethod
    hello(message: string) {
        return 'return value from the method';
    }
}

const sample = new SampleLog();
sample.hello('Hi there');

