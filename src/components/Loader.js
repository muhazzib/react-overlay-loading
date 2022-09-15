import './Loader.css';

const OverlayLoader = (props) => {


    const { active = true, variant = "spinner", onClick, overlayContainerStyle = {}, contentContainerStyle = {}, loadingTextStyle = {}, loadingText, children } = props;
    const loaders = {
        'spinner': <div className={variant} />,
        'wheel': <div className={variant} />,
        'facebook': <div className="facebook"><div /><div /><div /></div>,
        'circle': <div className="circle"><div/></div>,
        'ripple': <div className="ripple"><div/><div/></div>,
        'ring': <div className="ring"></div>
    };

    const libraryLoaders = () => loaders[variant] ? loaders[variant] : loaders['wheel'];

    return active ? (
        <div className="overlay_container" style={overlayContainerStyle} onClick={onClick}>
            <div className="overlay_content" style={contentContainerStyle}>
                {
                    children || libraryLoaders()
                }
                {
                    loadingText && (
                        <p style={{ loadingTextStyle }}>{loadingText}</p>
                    )
                }
            </div>
        </div>
    ) : null;
}

export default OverlayLoader;
