import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
   const {className} = props;

   return (
      <div
         data-testid={'navbar'}
         className={classNames(cls.navbar, {}, [className])}
      >
      </div>
   );
};
