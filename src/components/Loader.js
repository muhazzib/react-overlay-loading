import './Loader.css';

const OverlayLoader = (props) => {
    const { active = true, onClick, overlayContainerStyle = {}, contentContainerStyle = {}, loadingTextStyle = {}, loadingText, children } = props;
    return active ? (
        <div class="overlay_container" style={overlayContainerStyle} onClick={onClick}>
            <div class="overlay_content" style={contentContainerStyle}>
                {
                    children || <img className='default_loader' src={require('../assets/spinner.gif')} alt='loader' />
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
