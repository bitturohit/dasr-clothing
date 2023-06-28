import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Navigation from './components/routes/Navigation';
import SignIn from './components/routes/SignIn';

const App = () => {
  const Shop = () => {
    return <h1>This is the Shop Page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
