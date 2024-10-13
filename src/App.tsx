import { Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store/useStore';
import useLoginStore from './store/useLoginStore';
import Login from './pages/Login/Login';
import Nav from './components/Nav';
import Tasks from './pages/Tasks';

const App = () => {
  const { isNavOpen } = useStore();
  const { userLogin } = useLoginStore();

  return (
    <div className={userLogin ? 'flex' : ''}>
      {userLogin && <Nav />}
      <main className={`${userLogin ? `bg-lightGray w-full ${isNavOpen ? '330px' : '65px'}` : ''}`}>
        <Routes>
          {!userLogin ? (
            <Route path='*' element={<Login />} />
          ) : (
            <>
              <Route path='*' element={<Navigate to='/Tasks' />} />
              <Route path='/Tasks' element={<Tasks />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
};

export default App;
