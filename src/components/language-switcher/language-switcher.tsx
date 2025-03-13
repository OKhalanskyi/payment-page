import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'ua' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button
        className="cursor-pointer lg:hidden"
        onClick={() => changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')}
      >
        {i18n.language === 'ua' ? 'УКР' : 'ENG'}
      </button>

      <div className="hidden lg:flex gap-4">
        <button
          className={clsx('cursor-pointer', {
            'text-gray-400': i18n.language !== 'en',
          })}
          onClick={() => changeLanguage('en')}
        >
          ENG
        </button>
        <button
          className={clsx('cursor-pointer', {
            'text-gray-400': i18n.language !== 'ua',
          })}
          onClick={() => changeLanguage('ua')}
        >
          УКР
        </button>
      </div>
    </>
  );
};
