const getTimeDiff = (dateStr, diff = 0) => {
  return Date.now() - (new Date(dateStr).getTime()) + diff;
};

export { getTimeDiff };