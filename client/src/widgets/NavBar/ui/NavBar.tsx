import {classNames} from 'shared/lib/classNames/classNames';
import {Link} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
   const {className} = props;

   return (
      <div className={classNames(cls.navbar, {}, [className])}>
         <Link to={RoutePath.main} >Main Page</Link>
         <ThemeSwitcher/>
      </div>
   );
};
