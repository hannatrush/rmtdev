import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import SearchForm from './SearchForm';
import Sidebar from './Sidebar';
import { useDebounce } from '../lib/hooks/useDebounce';
import { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 250);

  const { setActiveId } = useStore();

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [setActiveId]);

  return (
    <>
      <Background />

      <Header>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar searchText={debouncedSearchText} />
      </Container>

      <Footer />

      <Toaster />
    </>
  );
}

export default App;
