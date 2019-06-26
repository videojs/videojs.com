export const joinUrls = (...urls) => {
 urls = urls.filter(Boolean);
 return urls.map(url => url.replace(/(^\/|\/$)/g, '')).join('/');
};
