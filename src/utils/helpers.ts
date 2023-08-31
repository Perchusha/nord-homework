export const debounce = function (callback, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
