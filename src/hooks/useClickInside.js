
export const clickInside = (ref, func) => {
    const listener = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (!ref.current || ref?.current?.contains(event.target)) return;
        func();
    }
    document.addEventListener('click', listener)
    // return () => document.removeEventListener('click', listener);
}
