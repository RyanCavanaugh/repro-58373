import { Filter, FilterQuery } from "grammy";
import { Context } from "grammy/out/context.js";
// Uncomment constraint to repro
type MiddlewareFn<C extends Context> = (ctx: C) => void;
declare function on<Q extends FilterQuery>(middleware: MiddlewareFn<Filter<Context, Q>>): void;
