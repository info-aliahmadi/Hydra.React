// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { PrivateRoutes, PublicRoutes } from 'routes/Routes';
import { Routes } from 'react-router-dom';
// import { LocalizationProvider } from 'Localization/LocalizationProvider';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
// import './Localization/i18n';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  let en = require('./Localization/resources/fr');

  const resources = {
    en
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'fr',
      // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <ThemeCustomization>
        <ScrollTop>
          <Routes>
            {PublicRoutes}
            {PrivateRoutes}
          </Routes>
        </ScrollTop>
      </ThemeCustomization>
    </I18nextProvider>
  );
};

export default App;
