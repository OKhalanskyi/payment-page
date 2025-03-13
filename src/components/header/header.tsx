import { ArrowLeft } from '@/shared/icons';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="font-medium flex justify-between w-full max-w-4xl mx-auto px-3 ">
      <span className="cursor-not-allowed lg:hidden">
        <ArrowLeft />
      </span>

      <h1 className="font-semibold text-lg lg:hidden">{t('checkout')}</h1>

      <div className="lg:ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
