import url from 'url';

export const SOURCES = {
  CONNECTIONS_BE: 'us-central1-connections-436317.cloudfunctions.net/go-function-95e4fdd',
};

export const createUrl = ({ source, route, params }) => {
  return url.format({
    protocol: 'https',
    host: source,
    pathname: route,
    query: params,
  });
};
