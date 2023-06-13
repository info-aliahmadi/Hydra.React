import React, { Component } from 'react';
import LocalizationService from './LocalizationService';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

export const LocalizationContext = React.createContext({
  getCurrentLanguage: () => ({}),
  setCurrentLanguage: () => ({}),
  getDefaultLanguage: () => ({}),
  getCurrentResource: () => ({}),
  getInitiali18n: () => ({})
});

export const LocalizationConsumer = LocalizationContext.Consumer;

export class LocalizationProvider extends Component {
  localizationService;
  constructor(props) {
    super(props);
    this.localizationService = new LocalizationService();

    let en = require('./resources/fr');

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
  }
  render() {
    return (
      <LocalizationContext.Provider value={this.localizationService}>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          {this.props.children}
        </I18nextProvider>
      </LocalizationContext.Provider>
    );
  }
}
