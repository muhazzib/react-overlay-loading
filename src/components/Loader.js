import './Loader.css';

const OverlayLoader = ({ overlayContainerStyle = {}, overlayContentStyle = {}, loadingTextStyle = {}, loadingText, children }) => {
    return (
        <div class="overlay_container" style={overlayContainerStyle}>
            <div class="overlay_content" style={overlayContentStyle}>
                {
                    children || <img className='default_loader' src={require('../assets/spinner.gif')} alt='spinner' />
                }
                {
                    loadingText && (
                        <p style={{ loadingTextStyle }}>{loadingText}</p>
                    )
                }
            </div>
        </div>
    );
}

export default OverlayLoader;
