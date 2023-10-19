import { FC } from 'react';
import Hero from 'widgets/Hero';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = () => (
  <div>
    <Hero />
  </div>
);

export default MainPage;
