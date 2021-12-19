import React, {useEffect, useRef} from "react";
import useIntersectionObserver from "../hook/useIntersectionObserver";


interface Props {
    url: string
}

const LazyImage = (props: Props) => {
    const {url} = props;
    const imgRef = useRef<HTMLImageElement>(null);

    const [setEntry] = useIntersectionObserver((entries) => {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target as HTMLImageElement;
                lazyImage.src = lazyImage.dataset.src as string;
            }
        })
    }, {
        root: null,
        rootMargin: '150px',
        threshold: 1
    });

    useEffect(() => {
        if (imgRef.current) setEntry(imgRef.current)
    }, [imgRef, setEntry]);

    return (
        <img ref={imgRef} data-src={url} alt="dummy"/>
    )
}

export default LazyImage;