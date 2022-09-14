# React-Overlay-Loading


## Demo
![](https://github.com/muhazzib/react-overlay-loading/blob/main/src/demo/demo.gif?raw=true)


## Quick start:

```javascript
import OverlayLoader from "./components/Loader";

<OverlayLoader loadingText='Loading...' active />

```

## Props:

- `active` (boolean)
  - default: `true`
- `onClick` (function)
  - default: `undefined` - click handler for the overlay when active.
- `overlayContainerStyle` (object)
  - default: `{}` - inline styling for overlay main container.
- `contentContainerStyle` (object)
  - default: `{}` - inline styling for content container.
- `loadingTextStyle` (object)
  - default: `{}` - inline styling for loading text if provided.
- `loadingText` (node)
  - default: `undefined` - the text to render in the loader overlay when active.

## Custom Loader:
Custom loader can be used in form of GIF and React Elements as well.

```javascript
import OverlayLoader from "./components/Loader";

const App = () => {
  return (
    <OverlayLoader>
        <CustomLoader />  // Your Loader
    </OverlayLoader>
  );
}