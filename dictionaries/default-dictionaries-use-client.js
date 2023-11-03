'use client'
import { defauiltDictionary } from './default-dictionaries'

export const getDictionaryUseClient = (locale) => {
    return defauiltDictionary[locale] ?? defauiltDictionary['pt-BR']
}