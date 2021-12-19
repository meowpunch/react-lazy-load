import React, {useEffect, useRef} from "react";


interface Props {
    url: string
}

const LazyImage = (props: Props) => {
    const {url} = props;
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    console.log(entry);
                    let lazyImage = entry.target as HTMLImageElement;
                    lazyImage.src = lazyImage.dataset.src as string;
                    observer.unobserve(lazyImage);
                }
            })
        }, {
            root: null,
            rootMargin: '150px',
            threshold: 1
        });

        if (imgRef.current) observer.observe(imgRef.current);

        return () => {
            console.log("disconnect");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (imgRef.current) observer.unobserve(imgRef.current);
            observer.disconnect();
        }
    }, [imgRef]);


    return (
        <img ref={imgRef} data-src={url} alt="dummy"/>
    )
}

export default LazyImage;