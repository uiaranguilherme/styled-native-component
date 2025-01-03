import { EventEmitter } from 'events';

export default <D extends (...args: any[]) => void>(callback: (...args: Parameters<D>) => void, dep: D) => {
    if (typeof dep !== 'function') {
        throw new TypeError('O segundo argumento deve ser uma função');
    }
    const eventEmitter = new EventEmitter();

    const eventName = dep.name;

    eventEmitter.addListener(eventName, (...args: Parameters<D>) => callback(...args));

    return (...args: Parameters<D>) => {
        eventEmitter.emit(eventName, ...args);
        dep(...args);
    };
};
