import React from 'react';

const Image = ({ src, alt, className, onLoad, isImageLoaded, widths = [400, 800, 1200] }) => {
    const webpSrcSet = widths.map(w => `${src}?w=${w}&format=webp ${w}w`).join(', ');
    const jpegSrcSet = widths.map(w => `${src}?w=${w} ${w}w`).join(', ');

    return (
        <picture className={className}>
            <source type="image/webp" srcSet={webpSrcSet} />
            <source type="image/jpeg" srcSet={jpegSrcSet} />
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={onLoad}
                className={className}
                style={{ opacity: isImageLoaded ? 1 : 0 }}
            />
        </picture>
    );
};

export default React.memo(Image);