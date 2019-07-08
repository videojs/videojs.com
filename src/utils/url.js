export const joinUrls = (...urls) => {
  urls = urls.filter(Boolean);

  return urls
    .map((url, i) => {
      if (i === 0) {
        return url.replace(/(\/$)/, '');
      } else if (i === (urls.length - 1)) {
        return url.replace(/(^\/)/, '');
      }
      return url.replace(/(^\/|\/$)/g, '')
    })
    .join('/');
};
