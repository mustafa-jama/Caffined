import Layout from './compoenets/Layout';
import Hero from './compoenets/Hero';
import CoffeForm from './compoenets/CoffeForm';
import Stats from './compoenets/Stats';
import History from './compoenets/History';

function App() {
  const isAuthenticated = false;

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );

  return (
    <Layout>
      <Hero />
      <CoffeForm isAuthenticated={isAuthenticated}/>
      {isAuthenticated && authenticatedContent}
    </Layout>
  );
}

export default App;
