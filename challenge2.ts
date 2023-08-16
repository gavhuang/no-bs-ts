// Reproduce map, filter, and forEach using reduce - with type safety
// reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// Map
// Pass in an array of T but after the callback
// It'll be some new generic S
const map = <T, S>(array: T[], callback: (value: T) => S): S[] => {
  return array.reduce((previousValue: S[], currentValue: T) => {
    let transformedCurrentValue = callback(currentValue);
    return [...previousValue, transformedCurrentValue]
  }, []);
};

// For Each
// Notice that the first argument to reduce can be unused.
const forEach = <T>(array: T[], callback: (value: T) => void): void => {
  array.reduce((_, currentValue) => {
    callback(currentValue);
    return null;
  }, null);
};

// Filter
const filter = <T>(array: T[], callback: (value: T) => boolean): T[] => {
  return array.reduce((previousValue: T[], currentValue: T) => {
    const isTrue = callback(currentValue);
    return isTrue ? [...previousValue, currentValue] : previousValue;
  }, []);
};

console.log(map([1, 2, 3, 4], (number) => number + 1));
console.log(map([1, 2, 3, 4], (number) => number + "1"));
forEach([1, 2, 3, 4], (number) => console.log(number));
console.log(filter([1, '2', 3, 4], (number) => typeof number === 'number'));
