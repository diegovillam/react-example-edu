import { PhotoProvider } from './context/PhotoContext';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <PhotoProvider>
      <Wrapper />
    </PhotoProvider>
  );
}

export default App;
