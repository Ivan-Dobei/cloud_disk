import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const onReloadPage = () => {
   window.location.reload();
};

export const PageError = ({className}: PageErrorProps) => {
   return (
      <div className={classNames(cls.PageError, {}, [className])}>
         <h1 className={cls.title}>An unexpected error has occurred</h1>
         <Button
            className={cls.reloadBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onReloadPage}
         >
            Reload page
         </Button>
      </div>
   );
};
