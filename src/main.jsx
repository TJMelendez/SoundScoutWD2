import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './input.css';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<App />);
}
