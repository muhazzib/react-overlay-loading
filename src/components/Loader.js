import './Loader.css';

const OverlayLoader = (props) => {
    const { active = true, variant = "spinner", onClick, overlayContainerStyle = {}, contentContainerStyle = {}, loadingTextStyle = {}, loadingText, children } = props;
    const loaders = {
        'spinner': <div className={variant} />,
        'wheel': <div className={variant} />,
        'facebook': <div className={variant}><div /><div /><div /></div>,
        'circle': <div className={variant}><div /></div>,
        'ripple': <div className={variant}><div /><div /></div>,
        'ring': <div className={variant} />
    };

    const libraryLoaders = () => loaders[variant] || loaders['wheel'];

    return active ? (
        <div className="overlay_container" style={overlayContainerStyle} onClick={onClick}>
            <div className="overlay_content" style={contentContainerStyle}>
                { children || libraryLoaders() }
                { loadingText && <p style={{ loadingTextStyle }}>{loadingText}</p> }
            </div>
        </div>
    ) : null;
}

export default OverlayLoader;
