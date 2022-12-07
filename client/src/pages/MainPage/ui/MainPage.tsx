import {classNames} from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string
}

const MainPage = ({className}: MainPageProps) => {
   return (
      <div className={classNames(cls.MainPage, {}, [className])}>
         Main Page
         <DarkIcon/>
      </div>
   );
};

export default MainPage;
