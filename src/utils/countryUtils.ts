export const getCountry = ($country: string | undefined): string => {
  switch ($country) {
    case 'pt-br':
      return 'Brasileira'
    case 'fr':
      return 'Francesa'
    case 'es':
      return 'Espanhola'
    case 'en':
      return 'Inglesa'
    case 'mx':
      return 'Mexicana'
    default:
      return 'Internacional'
  }
}
