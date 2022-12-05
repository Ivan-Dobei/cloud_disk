import cls from './MainPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface MainPageProps {
    className?: string
}

const MainPage = ({className}: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            Main Page
        </div>
    );
};

export default MainPage;
