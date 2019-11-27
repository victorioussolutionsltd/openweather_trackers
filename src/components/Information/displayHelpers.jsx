const isUnknown = (val) => (val == 'Infinity' || val == '-Infinity' || val == '' || val === null);

export const valueOrUnknown = (val) => (isUnknown(val) == true ? 'No data' : val);
