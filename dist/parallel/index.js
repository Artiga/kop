"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parallel = async (tasks) => Promise.all(tasks);
exports.parallel = parallel;
const map = async (args, iteratee) => {
    const task = async (argument) => iteratee(argument);
    return parallel(args.map(task));
};
exports.map = map;
