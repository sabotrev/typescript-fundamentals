export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      out[dKey] = fn(thisItem, idx);
    }
  });

  return out;
}

console.log(mapDict({ a: "a", b: "b", c: "c" }, str => ({ val: str })));

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
  dict: Dict<T>,
  reducer: (acc: S, curr: T, idx: number) => S,
  initialValue: S
) {
  let acc: S = initialValue;

  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];

    if (typeof thisItem !== "undefined") {
      acc = reducer(acc, thisItem, idx);
    }
  });

  return acc;
}

console.log(reduceDict({ a: 1, b: 2, c: 3 }, (acc, val) => acc + val, 0));
