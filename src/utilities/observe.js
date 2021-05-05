import 'intersection-observer'; // Polyfill

export default (targetElements, cb, t) => {
    const targets = document.querySelectorAll(targetElements);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: t,
    };

    targets.forEach((target) => {
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].intersectionRatio < options.threshold) return;
            cb(target);
            observer.disconnect();
        }, options);
        observer.observe(target);
    });
};
