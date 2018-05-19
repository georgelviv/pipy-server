import { fetchData } from './fetchData';

const IOT_API = 'iot';

const getIOTData = () => {
  return fetchData(`/${ IOT_API }`);
};

export { IOT_API, getIOTData };