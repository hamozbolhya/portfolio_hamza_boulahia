import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

render(
    () => (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    ),
    document.getElementById("root")
  );