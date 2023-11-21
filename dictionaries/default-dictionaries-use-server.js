//IMPORTA O I18N E DEFINE OS DICIONÁRIOS A SEREM USADOS NOS COMPONENTES DO LADO DO SERVIDOR
import 'server-only'
import { i18n } from '../config/i18n.config'
import { defauiltDictionary } from './default-dictionaries'

export const getDictionaryUseServer = (locale) => {
    return defauiltDictionary[locale] ?? defauiltDictionary[i18n.defaultLocale]
}