const defaultSearchUrl = `https://www.google.com/search?q=`;
export const handleSearch = (search: string) => {
  const fullQuery = search.split(' ').join('+');
  const [command, ...toSearch] = search.split(' ');
  const query = toSearch.join('+');

  //
  // Shortened commands to search/goto a specific site
  //
  // Example:
  //  case 'ytb': -> Command for YouTube
  //    window.location.href = toSearch.length
  //      ? `https://www.youtube.com/results?search_query=${query}` -> If arguments are present, search YouTube with the query
  //      : 'https://www.youtube.com'; -> If no arguments, go to the base YouTube site
  //
  switch (command.toLowerCase()) {
    // DUCKDUCKGO
    case 'ddg':
      window.location.href = toSearch.length
        ? `https://www.duckduckgo.com/?t=h_&q=${query}`
        : 'https://www.duckduckgo.com';
      break;
    // DEEPL
    case 'deepl':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.deepl.com/en/translator';
      break;
    case 'dpb': {
      const url = toSearch.length
        ? `${atob('aHR0cHM6Ly9kb3BlYm94LnRvL3NlYXJjaC8=')}${query}`
        : `${atob('aHR0cHM6Ly9kb3BlYm94LnRvLw==')}`;
      window.location.href = url;
      break;
    }
    // FreeMediaHeckYeah
    case 'fmhy':
      window.location.href = toSearch.length
        ? // No search on this website so if the search is more than "gh", go back to google.
          defaultSearchUrl + query
        : 'https://fmhy.net/';
      break;
    // CHAT GPT
    case 'gpt':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://chatgpt.com/';
      break;
    // GITHUB
    case 'gh':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : (window.location.href = 'https://www.github.com');
      break;
    // GOOGLE IMAGES
    case 'img':
      window.location.href = toSearch.length
        ? `https://www.google.com/search?tbm=isch&q=${query}`
        : 'https://www.google.com/search?tbm=isch';
      break;
    // GOOGLE MAPS
    case 'maps':
      window.location.href = toSearch.length
        ? `https://www.google.com/maps/search/${query}`
        : 'https://www.google.com/maps';
      break;
    // TF1
    case 'tf1':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.tf1.fr/';
      break;
    // VRT MAX
    case 'vrt':
      window.location.href = toSearch.length
        ? `https://www.vrt.be/vrtmax/zoeken/?q=${query}`
        : 'https://www.vrt.be/vrtmax/';
      break;
    // KMI WEER
    case 'wtr':
      window.location.href = toSearch.length
        ? `https://www.meteo.be/nl/${toSearch.join('-')}`
        : 'https://www.meteo.be/nl/belgie';
      break;
    case 'whoami':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.youtube.com/embed/rkWoVBRxUKk';
      break;
    // WIKIPEDIA
    case 'wiki':
      window.location.href = toSearch.length
        ? `https://en.wikipedia.org/w/index.php?search=${query}`
        : 'https://en.wikipedia.org';
      break;
    // YOUTUBE
    case 'ytb':
      window.location.href = toSearch.length
        ? `https://www.youtube.com/results?search_query=${query}`
        : 'https://www.youtube.com';
      break;
    default:
      window.location.href = `${defaultSearchUrl}${fullQuery}`;
      break;
  }
};

export const items: { key: string; label: string }[] = [
  { key: 'ddg', label: 'DuckDuckGo + Search' },
  { key: 'deepl', label: 'Deepl' },
  { key: 'dpb', label: 'Dopebox + Search' },
  { key: 'fmhy', label: 'FreeMediaHeckYeah + Search' },
  { key: 'gpt', label: 'ChatGPT' },
  { key: 'gh', label: 'Github' },
  { key: 'img', label: 'Google Images + Search' },
  { key: 'maps', label: 'Google Maps + Search' },
  { key: 'tf1', label: 'TF1' },
  { key: 'vrt', label: 'VRT MAX + Search' },
  { key: 'wtr', label: 'Weather(KMI) + Search' },
  { key: 'wiki', label: 'Wikipedia + Search' },
  { key: 'ytb', label: 'Youtube + Search' },
];
