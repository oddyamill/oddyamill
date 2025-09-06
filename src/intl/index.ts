const translations = {
  en: {
    'index.title': 'oddyamill',
    'index.description': 'hey my name is oddyamill',
    'index.header': 'peace to all',
    'index.message': 'my name is oddyamill and this is my page!',
    'request.title': 'doxxer',
    'request.description': 'turn off your vpn',
    'request.message': 'hi',
    'request.ip': 'your ip',
    'request.city': 'your city',
    'request.unknownCity': 'govnoedsk',
    'request.country': 'your country',
    'request.timezone': 'your timezone',
    'request.protocol': 'your protocol',
    'request.continent': 'your continent',
    'request.asn': 'your asn',
    'request.organization': 'your organization',
    'request.colo': 'your data center',
    'request.warp': 'you\'re connted to WARP'
  },
  ru: {
    'index.title': 'oddyamill',
    'index.description': 'привет меня зовут oddyamill',
    'index.header': 'всем пис',
    'index.message': 'меня зовут oddyamill и это моя страничка!',
    'request.title': 'пробиватор',
    'request.description': 'выключите впн',
    'request.message': 'привет',
    'request.ip': 'твой ip',
    'request.city': 'твой город',
    'request.unknownCity': 'говноедск',
    'request.country': 'твоя страна',
    'request.timezone': 'твой часовой пояс',
    'request.protocol': 'твой протокол',
    'request.continent': 'твой континент',
    'request.asn': 'твой asn',
    'request.organization': 'твоя организация',
    'request.colo': 'твой центр обработки данных',
    'request.warp': 'ты подключен к WARP'
  },
}

const defualtTranslation = translations.en

export type TranslationKey = keyof typeof defualtTranslation

export function t(lang: string, key: TranslationKey) {
  return ((translations as any)[lang])?.[key] ?? defualtTranslation[key] ?? key
}

export function getStaticPaths() {
  return Object.entries(translations).map(([lang, t]) =>
    ({ params: { lang: t === defualtTranslation ? undefined : lang } }))
}
