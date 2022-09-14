import OverlayLoader from "./components/Loader";

function App() {
  return (
    <OverlayLoader loadingText='Loading...' overlayContentStyle={{ width: '80px' }} />
  );
}

export default App;