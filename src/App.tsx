import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      Hi there
      {t('test')}
    </div>
  );
}

export default App;
