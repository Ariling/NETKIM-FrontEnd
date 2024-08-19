import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>헤더</div>
      <Outlet />
      <div>푸터</div>
    </>
  );
}

export default App;
