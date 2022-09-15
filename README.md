# React-Overlay-Loading


## Installation

```bash
  npm install overlay-loading-react
```
    
## Quick start:

```javascript
import OverlayLoader from "./components/Loader";

<OverlayLoader loadingText='Loading...' active />

```

## Variants

![](https://github.com/muhazzib/react-overlay-loading/blob/main/src/demo/demo.gif?raw=true)

## Custom Loader:
Custom loader can be used in form of GIF and React Elements as well.

```javascript
import OverlayLoader from "./components/Loader";

const App = () => {
  return (
    <OverlayLoader>
        <MyComponent />  // Your Loader
    </OverlayLoader>
  );
}
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
- `loadingText` (string)
  - default: `undefined` - the text to render in the loader overlay when active.
- `variant` (string)
  - default: `spinner` - The type of loading to show.


## Authors
- [@muhazzib](https://github.com/muhazzib)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhazzib-07/)

