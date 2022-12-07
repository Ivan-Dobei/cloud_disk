import {classNames} from 'shared/lib/classNames/classNames';
import {Link} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {useState} from 'react';
import {Button} from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = ({className}: SideBarProps) => {
   const [collapsed, setCollapsed] = useState(false);

   const toggleSidebar = () => {
      setCollapsed(prevState => !prevState);
   };

   return (
      <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
         <ul className={cls.links}>
            <li className={cls.link}>
               <Link to={RoutePath.main} >Main Page</Link>
            </li>
         </ul>

         <div>
            <ThemeSwitcher/>
            <Button onClick={toggleSidebar}>toggle</Button>
         </div>
      </div>
   );
};
