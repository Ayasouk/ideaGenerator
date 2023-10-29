import logo from './logo.svg';
import './App.css';
import IdeaGeneratorPage from './pages/ideaGeneratorPage';

function App() {
  return (
    <div className="">
      <div className='h-screen bg-slate-900 font-sans overflow-hidden relative text-white'>
        <div className='flex flex-col flex-wrap'>
          <IdeaGeneratorPage />
        </div>
      </div>
      
    </div>
  );
}

export default App;
