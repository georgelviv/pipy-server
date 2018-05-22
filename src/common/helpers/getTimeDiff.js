const getTimeDiff = (date, diff = 0) => {
  return Date.now() - (date.getTime()) + diff;
};

export { getTimeDiff };