import { FC } from 'react';
import Category from 'widgets/Category';
import Hero from 'widgets/Hero';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = () => (
  <div>
    <Hero />
    <Category />
  </div>
);

export default MainPage;
