import hero from './home_components/hero';
import about from './home_components/about';
import '../../styles/home.css';

const home = () => {
  const main = document.createElement('main');
  main.id = 'main-home';
  main.appendChild(hero);
  main.appendChild(about);

  return main;
};

export default home();
