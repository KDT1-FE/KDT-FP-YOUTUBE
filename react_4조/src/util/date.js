import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function DateFormatter(date, lang = 'en_US') {
  return format(date, lang);
}
