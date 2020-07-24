# decorator
Let's talk about decorators, if you are a C# or Java developer or if you work with Angular, you probably already familiar with decorators, at least seen @Inject, @Input, @Output, etc

Today we will take a look at Aspect Oriented Programming (AOP) on how to build customs decorators. Also we will take a look a familiar patterns like: singleton, factory, and how to build applications using Test Driven Development (TDD)

With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.

- NOTE  Decorators are an experimental feature that may change in future releases.

tsc --target ES5 --experimentalDecorators
tsconfig.json:

```
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

- For more information
- `https://www.typescriptlang.org/docs/handbook/decorators.html`

To star let's fist create a new project

let's initialize a node project:
- `npm init`

create a .gitignore file and exclude:
- node_modules/
- /dist

Install Jest for our test:\
- `npm install --save-dev jest` 
- `npm install jest @types/jest ts-jest`

setup Jest configs
update package to run test with coverage

now that we have Test setup, let's create a test for the requirements, in this case, the clients needs a simple calculator that can take two numbers and get the results, add, subtract, multiply, divide. And we will try TDD
- first lets create the test class for Calculator and the methods
- go thru the process of test, fail, fix, until we get all the test passing

- A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
- Decorators use the form @expression, where expression must evaluate to a function that will be called at run-time with information about the decorated declaration.
- It serves the purpose of adding metadata to the existing code in a declarative way.
- Types of decorators and its priority of execution are
- Class decorator — Priority 4 (Object Instance, Static)
- Method Decorator — Priority 2 (Object Instance, Static)
- Accessor or Property Decorator — Priority 3 (Object Instance, Static)
- Parameter Decorator — Priority 1 (Object Instance, Static)

- Note — If a decorator is applied for parameters of the class constructor then priority for those will be 1. parameter, 2. method, 3. accessor or property decorator — then 4. Constructor parameter decorator will be executed followed by 5. class decorator.

Now let's work with Decorators
- first let's add console.logs
- create a class logger.ts and create a simple log decorator
```
public simpleLog(target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log(`called function:${propertyKey}`);
    return null;
}
```

- now let's add a proper method decorator, replace `@simpleDecorator` with `@logMethod`
```
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
```

- run tests, check everything is 100%, check the new and improve logs!
- let's run `npm run start` and check the js


- you can find more information here:
- `https://www.typescriptlang.org/docs/handbook/decorators.html`
