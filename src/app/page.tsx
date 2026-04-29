import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import DataLoader from './components/DataLoader';
import PriceFormatter from './components/PriceFormatter';

export default function Home() {
  return (
    <main>
      <h1>Fixabot Test App</h1>
      <p className="lede">
        Each card below triggers a different bug. Click the buttons to throw the errors,
        then watch Fixabot pick them up.
      </p>

      <UserProfile />
      <Counter />
      <DataLoader />
      <PriceFormatter />
    </main>
  );
}
