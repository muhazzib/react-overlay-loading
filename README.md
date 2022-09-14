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

## Custom Spinner :recycle:

Adding a custom spinner is super easy, here's an example:

Acquire the spinner you want to use. Doesn't matter where you get it, as long as you're rendering a valid React node. It can be a custom svg in your codebase if you want. For this example let's use [`react-spinners`](https://www.npmjs.com/package/react-spinners). 

```
npm install react-spinners
```

Then simply provide it to the spinner prop for your loader.

```javascript
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

export default function MyLoader({ active, children }) {
  return (
    <LoadingOverlay
      active={active}
      spinner={<BounceLoader />}
    >
      {children}
    </LoadingOverlay>
  )
}