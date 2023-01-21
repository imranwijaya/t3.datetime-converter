export type LocalesType = {
  [k in LocalesKey]: {
    code: k;
    summary: string;
    language: string;
  };
};

export type LocalesArrayObjectType = {
  code: LocalesKey;
  summary: string;
  language: string;
};

export type LocalesKey =
  | "af"
  | "ar"
  | "ar-DZ"
  | "ar-EG"
  | "ar-MA"
  | "ar-SA"
  | "ar-TN"
  | "az"
  | "be"
  | "bg"
  | "bn"
  | "bs"
  | "ca"
  | "cs"
  | "cy"
  | "da"
  | "de"
  | "de-AT"
  | "el"
  | "en-AU"
  | "en-CA"
  | "en-GB"
  | "en-IE"
  | "en-IN"
  | "en-NZ"
  | "en-US"
  | "en-ZA"
  | "eo"
  | "es"
  | "et"
  | "eu"
  | "fa-IR"
  | "fi"
  | "fr"
  | "fr-CA"
  | "fr-CH"
  | "fy"
  | "gd"
  | "gl"
  | "gu"
  | "he"
  | "hi"
  | "hr"
  | "ht"
  | "hu"
  | "hy"
  | "id"
  | "is"
  | "it"
  | "ja"
  | "ja-Hira"
  | "ka"
  | "kk"
  | "km"
  | "kn"
  | "ko"
  | "lb"
  | "lt"
  | "lv"
  | "mk"
  | "mn"
  | "ms"
  | "mt"
  | "nb"
  | "nl"
  | "nl-BE"
  | "nn"
  | "oc"
  | "pl"
  | "pt"
  | "pt-BR"
  | "ro"
  | "ru"
  | "sk"
  | "sl"
  | "sq"
  | "sr"
  | "sr-Latn"
  | "sv"
  | "ta"
  | "te"
  | "th"
  | "tr"
  | "ug"
  | "uk"
  | "uz"
  | "uz-Cyrl"
  | "vi"
  | "zh-CN"
  | "zh-HK"
  | "zh-TW";

export const Locales: LocalesType = {
  af: { code: "af", summary: "Afrikaans locale", language: "Afrikaans" },
  ar: {
    code: "ar",
    summary: "Arabic locale (Modern Standard Arabic - Al-fusha)",
    language: "Modern Standard Arabic",
  },
  "ar-DZ": {
    code: "ar-DZ",
    summary: "Arabic locale (Algerian Arabic)",
    language: "Algerian Arabic",
  },
  "ar-EG": {
    code: "ar-EG",
    summary: "Arabic locale (Egypt)",
    language: "Arabic",
  },
  "ar-MA": {
    code: "ar-MA",
    summary: "Arabic locale (Moroccan Arabic)",
    language: "Moroccan Arabic",
  },
  "ar-SA": {
    code: "ar-SA",
    summary: "Arabic locale (Saudi Arabic)",
    language: "Arabic",
  },
  "ar-TN": {
    code: "ar-TN",
    summary: "Arabic locale (Tunisian Arabic)",
    language: "Arabic",
  },
  az: { code: "az", summary: "Azerbaijani locale", language: "Azerbaijani" },
  be: { code: "be", summary: "Belarusian locale", language: "Belarusian" },
  bg: { code: "bg", summary: "Bulgarian locale", language: "Bulgarian" },
  bn: { code: "bn", summary: "Bengali locale", language: "Bengali" },
  bs: { code: "bs", summary: "Bosnian locale", language: "Bosnian" },
  ca: { code: "ca", summary: "Catalan locale", language: "Catalan" },
  cs: { code: "cs", summary: "Czech locale", language: "Czech" },
  cy: { code: "cy", summary: "Welsh locale", language: "Welsh" },
  da: { code: "da", summary: "Danish locale", language: "Danish" },
  de: { code: "de", summary: "German locale", language: "German" },
  "de-AT": {
    code: "de-AT",
    summary: "German locale (Austria)",
    language: "German",
  },
  el: { code: "el", summary: "Greek locale", language: "Greek" },
  "en-AU": {
    code: "en-AU",
    summary: "English locale (Australia)",
    language: "English",
  },
  "en-CA": {
    code: "en-CA",
    summary: "English locale (Canada)",
    language: "English",
  },
  "en-GB": {
    code: "en-GB",
    summary: "English locale (United Kingdom)",
    language: "English",
  },
  "en-IE": {
    code: "en-IE",
    summary: "English locale (Ireland)",
    language: "English",
  },
  "en-IN": {
    code: "en-IN",
    summary: "English locale (India)",
    language: "English",
  },
  "en-NZ": {
    code: "en-NZ",
    summary: "English locale (New Zealand)",
    language: "English",
  },
  "en-US": {
    code: "en-US",
    summary: "English locale (United States)",
    language: "English",
  },
  "en-ZA": {
    code: "en-ZA",
    summary: "English locale (South Africa)",
    language: "English",
  },
  eo: { code: "eo", summary: "Esperanto locale", language: "Esperanto" },
  es: { code: "es", summary: "Spanish locale", language: "Spanish" },
  et: { code: "et", summary: "Estonian locale", language: "Estonian" },
  eu: { code: "eu", summary: "Basque locale", language: "Basque" },
  "fa-IR": {
    code: "fa-IR",
    summary: "Persian/Farsi locale (Iran)",
    language: "Persian",
  },
  fi: { code: "fi", summary: "Finnish locale", language: "Finnish" },
  fr: { code: "fr", summary: "French locale", language: "French" },
  "fr-CA": {
    code: "fr-CA",
    summary: "French locale (Canada)",
    language: "French",
  },
  "fr-CH": {
    code: "fr-CH",
    summary: "French locale (Switzerland)",
    language: "French",
  },
  fy: {
    code: "fy",
    summary: "Western Frisian locale (Netherlands)",
    language: "West Frisian",
  },
  gd: { code: "gd", summary: "Scottish Gaelic", language: "Scottish Gaelic" },
  gl: { code: "gl", summary: "Galician locale", language: "Galician" },
  gu: {
    code: "gu",
    summary: "Gujarati locale (India)",
    language: "Gujarati",
  },
  he: { code: "he", summary: "Hebrew locale", language: "Hebrew" },
  hi: { code: "hi", summary: "Hindi locale (India)", language: "Hindi" },
  hr: { code: "hr", summary: "Croatian locale", language: "Croatian" },
  ht: {
    code: "ht",
    summary: "Haitian Creole locale",
    language: "Haitian Creole",
  },
  hu: { code: "hu", summary: "Hungarian locale", language: "Hungarian" },
  hy: { code: "hy", summary: "Armenian locale", language: "Armenian" },
  id: { code: "id", summary: "Indonesian locale", language: "Indonesian" },
  is: { code: "is", summary: "Icelandic locale", language: "Icelandic" },
  it: { code: "it", summary: "Italian locale", language: "Italian" },
  ja: { code: "ja", summary: "Japanese locale", language: "Japanese" },
  "ja-Hira": {
    code: "ja-Hira",
    summary: "Japanese (Hiragana) locale",
    language: "Japanese (Hiragana)",
  },
  ka: { code: "ka", summary: "Georgian locale", language: "Georgian" },
  kk: { code: "kk", summary: "Kazakh locale", language: "Kazakh" },
  km: { code: "km", summary: "Khmer locale (Cambodian)", language: "Khmer" },
  kn: { code: "kn", summary: "Kannada locale (India)", language: "Kannada" },
  ko: { code: "ko", summary: "Korean locale", language: "Korean" },
  lb: {
    code: "lb",
    summary: "Luxembourgish locale",
    language: "Luxembourgish",
  },
  lt: { code: "lt", summary: "Lithuanian locale", language: "Lithuanian" },
  lv: { code: "lv", summary: "Latvian locale (Latvia)", language: "Latvian" },
  mk: { code: "mk", summary: "Macedonian locale", language: "Macedonian" },
  mn: { code: "mn", summary: "Mongolian locale", language: "Mongolian" },
  ms: { code: "ms", summary: "Malay locale", language: "Malay" },
  mt: { code: "mt", summary: "Maltese locale", language: "Maltese" },
  nb: {
    code: "nb",
    summary: "Norwegian Bokmål locale",
    language: "Norwegian Bokmål",
  },
  nl: { code: "nl", summary: "Dutch locale", language: "Dutch" },
  "nl-BE": {
    code: "nl-BE",
    summary: "Dutch (Belgium) locale",
    language: "Dutch (Belgium)",
  },
  nn: {
    code: "nn",
    summary: "Norwegian Nynorsk locale",
    language: "Norwegian Nynorsk",
  },
  oc: { code: "oc", summary: "Occitan locale", language: "Occitan" },
  pl: { code: "pl", summary: "Polish locale", language: "Polish" },
  pt: { code: "pt", summary: "Portuguese locale", language: "Portuguese" },
  "pt-BR": {
    code: "pt-BR",
    summary: "Portuguese locale (Brazil)",
    language: "Portuguese",
  },
  ro: { code: "ro", summary: "Romanian locale", language: "Romanian" },
  ru: { code: "ru", summary: "Russian locale", language: "Russian" },
  sk: { code: "sk", summary: "Slovak locale", language: "Slovak" },
  sl: { code: "sl", summary: "Slovenian locale", language: "Slovenian" },
  sq: { code: "sq", summary: "Albanian locale", language: "Shqip" },
  sr: { code: "sr", summary: "Serbian cyrillic locale", language: "Serbian" },
  "sr-Latn": {
    code: "sr-Latn",
    summary: "Serbian latin locale",
    language: "Serbian",
  },
  sv: { code: "sv", summary: "Swedish locale", language: "Swedish" },
  ta: { code: "ta", summary: "Tamil locale (India)", language: "Tamil" },
  te: { code: "te", summary: "Telugu locale", language: "Telugu" },
  th: { code: "th", summary: "Thai locale", language: "Thai" },
  tr: { code: "tr", summary: "Turkish locale", language: "Turkish" },
  ug: { code: "ug", summary: "Uighur locale", language: "Uighur" },
  uk: { code: "uk", summary: "Ukrainian locale", language: "Ukrainian" },
  uz: { code: "uz", summary: "Uzbek locale", language: "Uzbek" },
  "uz-Cyrl": {
    code: "uz-Cyrl",
    summary: "Uzbek Cyrillic locale",
    language: "Uzbek",
  },
  vi: {
    code: "vi",
    summary: "Vietnamese locale (Vietnam)",
    language: "Vietnamese",
  },
  "zh-CN": {
    code: "zh-CN",
    summary: "Chinese Simplified locale (Mainland China)",
    language: "Chinese Simplified",
  },
  "zh-HK": {
    code: "zh-HK",
    summary: "Chinese Traditional locale (Hong Kong)",
    language: "Chinese Traditional",
  },
  "zh-TW": {
    code: "zh-TW",
    summary: "Chinese Traditional locale (Taiwan)",
    language: "Chinese Traditional",
  },
};

export const LocalesArray = [
  "af",
  "ar",
  "ar-DZ",
  "ar-EG",
  "ar-MA",
  "ar-SA",
  "ar-TN",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "de-AT",
  "el",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-IN",
  "en-NZ",
  "en-US",
  "en-ZA",
  "eo",
  "es",
  "et",
  "eu",
  "fa-IR",
  "fi",
  "fr",
  "fr-CA",
  "fr-CH",
  "fy",
  "gd",
  "gl",
  "gu",
  "he",
  "hi",
  "hr",
  "ht",
  "hu",
  "hy",
  "id",
  "is",
  "it",
  "ja",
  "ja-Hira",
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "lb",
  "lt",
  "lv",
  "mk",
  "mn",
  "ms",
  "mt",
  "nb",
  "nl",
  "nl-BE",
  "nn",
  "oc",
  "pl",
  "pt",
  "pt-BR",
  "ro",
  "ru",
  "sk",
  "sl",
  "sq",
  "sr",
  "sr-Latn",
  "sv",
  "ta",
  "te",
  "th",
  "tr",
  "ug",
  "uk",
  "uz",
  "uz-Cyrl",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW",
];

/**
 * @see https://github.com/date-fns/date-fns/discussions/3282
 * @see https://github.com/date-fns/date-fns/blob/af38b9eb940cdceae62e8742fd67161b47740bde/docs/i18nLocales.md
 * @see https://bobbyhadz.com/blog/javascript-get-country-name-from-country-code
 */
export const LocalesArrayObject: LocalesArrayObjectType[] = [
  { code: "af", summary: "Afrikaans locale", language: "Afrikaans" },
  {
    code: "ar",
    summary: "Arabic locale (Modern Standard Arabic - Al-fusha)",
    language: "Modern Standard Arabic",
  },
  {
    code: "ar-DZ",
    summary: "Arabic locale (Algerian Arabic)",
    language: "Algerian Arabic",
  },
  { code: "ar-EG", summary: "Arabic locale (Egypt)", language: "Arabic" },
  {
    code: "ar-MA",
    summary: "Arabic locale (Moroccan Arabic)",
    language: "Moroccan Arabic",
  },
  {
    code: "ar-SA",
    summary: "Arabic locale (Saudi Arabic)",
    language: "Arabic",
  },
  {
    code: "ar-TN",
    summary: "Arabic locale (Tunisian Arabic)",
    language: "Arabic",
  },
  { code: "az", summary: "Azerbaijani locale", language: "Azerbaijani" },
  { code: "be", summary: "Belarusian locale", language: "Belarusian" },
  { code: "bg", summary: "Bulgarian locale", language: "Bulgarian" },
  { code: "bn", summary: "Bengali locale", language: "Bengali" },
  { code: "bs", summary: "Bosnian locale", language: "Bosnian" },
  { code: "ca", summary: "Catalan locale", language: "Catalan" },
  { code: "cs", summary: "Czech locale", language: "Czech" },
  { code: "cy", summary: "Welsh locale", language: "Welsh" },
  { code: "da", summary: "Danish locale", language: "Danish" },
  { code: "de", summary: "German locale", language: "German" },
  {
    code: "de-AT",
    summary: "German locale (Austria)",
    language: "German",
  },
  { code: "el", summary: "Greek locale", language: "Greek" },
  {
    code: "en-AU",
    summary: "English locale (Australia)",
    language: "English",
  },
  {
    code: "en-CA",
    summary: "English locale (Canada)",
    language: "English",
  },
  {
    code: "en-GB",
    summary: "English locale (United Kingdom)",
    language: "English",
  },
  {
    code: "en-IE",
    summary: "English locale (Ireland)",
    language: "English",
  },
  {
    code: "en-IN",
    summary: "English locale (India)",
    language: "English",
  },
  {
    code: "en-NZ",
    summary: "English locale (New Zealand)",
    language: "English",
  },
  {
    code: "en-US",
    summary: "English locale (United States)",
    language: "English",
  },
  {
    code: "en-ZA",
    summary: "English locale (South Africa)",
    language: "English",
  },
  { code: "eo", summary: "Esperanto locale", language: "Esperanto" },
  { code: "es", summary: "Spanish locale", language: "Spanish" },
  { code: "et", summary: "Estonian locale", language: "Estonian" },
  { code: "eu", summary: "Basque locale", language: "Basque" },
  {
    code: "fa-IR",
    summary: "Persian/Farsi locale (Iran)",
    language: "Persian",
  },
  { code: "fi", summary: "Finnish locale", language: "Finnish" },
  { code: "fr", summary: "French locale", language: "French" },
  {
    code: "fr-CA",
    summary: "French locale (Canada)",
    language: "French",
  },
  {
    code: "fr-CH",
    summary: "French locale (Switzerland)",
    language: "French",
  },
  {
    code: "fy",
    summary: "Western Frisian locale (Netherlands)",
    language: "West Frisian",
  },
  { code: "gd", summary: "Scottish Gaelic", language: "Scottish Gaelic" },
  { code: "gl", summary: "Galician locale", language: "Galician" },
  {
    code: "gu",
    summary: "Gujarati locale (India)",
    language: "Gujarati",
  },
  { code: "he", summary: "Hebrew locale", language: "Hebrew" },
  { code: "hi", summary: "Hindi locale (India)", language: "Hindi" },
  { code: "hr", summary: "Croatian locale", language: "Croatian" },
  {
    code: "ht",
    summary: "Haitian Creole locale",
    language: "Haitian Creole",
  },
  { code: "hu", summary: "Hungarian locale", language: "Hungarian" },
  { code: "hy", summary: "Armenian locale", language: "Armenian" },
  { code: "id", summary: "Indonesian locale", language: "Indonesian" },
  { code: "is", summary: "Icelandic locale", language: "Icelandic" },
  { code: "it", summary: "Italian locale", language: "Italian" },
  { code: "ja", summary: "Japanese locale", language: "Japanese" },
  {
    code: "ja-Hira",
    summary: "Japanese (Hiragana) locale",
    language: "Japanese (Hiragana)",
  },
  { code: "ka", summary: "Georgian locale", language: "Georgian" },
  { code: "kk", summary: "Kazakh locale", language: "Kazakh" },
  { code: "km", summary: "Khmer locale (Cambodian)", language: "Khmer" },
  { code: "kn", summary: "Kannada locale (India)", language: "Kannada" },
  { code: "ko", summary: "Korean locale", language: "Korean" },
  {
    code: "lb",
    summary: "Luxembourgish locale",
    language: "Luxembourgish",
  },
  { code: "lt", summary: "Lithuanian locale", language: "Lithuanian" },
  { code: "lv", summary: "Latvian locale (Latvia)", language: "Latvian" },
  { code: "mk", summary: "Macedonian locale", language: "Macedonian" },
  { code: "mn", summary: "Mongolian locale", language: "Mongolian" },
  { code: "ms", summary: "Malay locale", language: "Malay" },
  { code: "mt", summary: "Maltese locale", language: "Maltese" },
  {
    code: "nb",
    summary: "Norwegian Bokmål locale",
    language: "Norwegian Bokmål",
  },
  { code: "nl", summary: "Dutch locale", language: "Dutch" },
  {
    code: "nl-BE",
    summary: "Dutch (Belgium) locale",
    language: "Dutch (Belgium)",
  },
  {
    code: "nn",
    summary: "Norwegian Nynorsk locale",
    language: "Norwegian Nynorsk",
  },
  { code: "oc", summary: "Occitan locale", language: "Occitan" },
  { code: "pl", summary: "Polish locale", language: "Polish" },
  { code: "pt", summary: "Portuguese locale", language: "Portuguese" },
  {
    code: "pt-BR",
    summary: "Portuguese locale (Brazil)",
    language: "Portuguese",
  },
  { code: "ro", summary: "Romanian locale", language: "Romanian" },
  { code: "ru", summary: "Russian locale", language: "Russian" },
  { code: "sk", summary: "Slovak locale", language: "Slovak" },
  { code: "sl", summary: "Slovenian locale", language: "Slovenian" },
  { code: "sq", summary: "Albanian locale", language: "Shqip" },
  { code: "sr", summary: "Serbian cyrillic locale", language: "Serbian" },
  {
    code: "sr-Latn",
    summary: "Serbian latin locale",
    language: "Serbian",
  },
  { code: "sv", summary: "Swedish locale", language: "Swedish" },
  { code: "ta", summary: "Tamil locale (India)", language: "Tamil" },
  { code: "te", summary: "Telugu locale", language: "Telugu" },
  { code: "th", summary: "Thai locale", language: "Thai" },
  { code: "tr", summary: "Turkish locale", language: "Turkish" },
  { code: "ug", summary: "Uighur locale", language: "Uighur" },
  { code: "uk", summary: "Ukrainian locale", language: "Ukrainian" },
  { code: "uz", summary: "Uzbek locale", language: "Uzbek" },
  {
    code: "uz-Cyrl",
    summary: "Uzbek Cyrillic locale",
    language: "Uzbek",
  },
  {
    code: "vi",
    summary: "Vietnamese locale (Vietnam)",
    language: "Vietnamese",
  },
  {
    code: "zh-CN",
    summary: "Chinese Simplified locale (Mainland China)",
    language: "Chinese Simplified",
  },
  {
    code: "zh-HK",
    summary: "Chinese Traditional locale (Hong Kong)",
    language: "Chinese Traditional",
  },
  {
    code: "zh-TW",
    summary: "Chinese Traditional locale (Taiwan)",
    language: "Chinese Traditional",
  },
];

export function getLocaleFromArrayObject(code: LocalesKey) {
  const filter = LocalesArrayObject.filter((obj) => obj.code === code);
  return filter[0] as LocalesArrayObjectType;
}
