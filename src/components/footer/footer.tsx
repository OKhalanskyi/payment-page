import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-gray-600">
      {t('poweredBy')}&nbsp;<strong>Solid</strong>
    </footer>
  );
};
