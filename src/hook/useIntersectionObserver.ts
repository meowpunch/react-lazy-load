import {useEffect, useState} from "react";


const useIntersectionObserver = <T extends Element>(callback: IntersectionObserverCallback, options: IntersectionObserverInit) => {
    const [entry, setEntry] = useState<T>();

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        if (entry) observer.observe(entry);

        return () => {
            if (entry) observer.unobserve(entry);
            observer.disconnect();
        }
    }, [entry]);

    return [setEntry];
}

export default useIntersectionObserver;