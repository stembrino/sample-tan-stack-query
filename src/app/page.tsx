import Posts from './components/Posts/Posts';
import Posts2 from './components/Posts/Posts2';

function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-xl font-black'>THIS IS A TEST TO CHECK USE QUERY (TanStack Query)</h1>
      <Posts />
      <Posts2 />
    </main>
  );
}


export default Home