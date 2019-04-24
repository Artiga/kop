const parallel = async (tasks: Promise<any>[]): Promise<any> => Promise.all(tasks);

const map = async (args: any[], iteratee: Function): Promise<any> => {
    const task = async (argument: any): Promise<any> => iteratee(argument);
    return parallel(args.map(task));
};

export {
    map,
    parallel,
};
