import CONFIG from 'config';
import moment from 'moment';

export const DateViewer = (currentLanguage, date) => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(currentLanguage, { dateStyle: [CONFIG.DATE_STYLE], timeZone: timeZone }).format(moment(date + 'Z'));
};
export const DateTimeViewer = (currentLanguage, dateTime) => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(currentLanguage, {
    dateStyle: [CONFIG.DATE_STYLE],
    timeStyle: [CONFIG.TIME_STYLE],
    hour12: false,
    timeZone: timeZone
  }).format(moment(dateTime + 'Z'));
};
