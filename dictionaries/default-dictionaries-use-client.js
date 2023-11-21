//IMPORTA O I18N E DEFINE OS DICIONÁRIOS A SEREM USADOS NOS COMPONENTES DO LADO DO CLIENTE
'use client'
import { defauiltDictionary } from './default-dictionaries'

export const getDictionaryUseClient = (locale) => {
    return defauiltDictionary[locale] ?? defauiltDictionary['pt-BR']
}