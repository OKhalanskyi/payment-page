import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-gray-600 mt-auto pt-12">
      {t('powered_by')}&nbsp;<strong>Solid</strong>
    </footer>
  );
};
