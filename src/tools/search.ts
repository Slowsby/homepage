const defaultSearchUrl = `https://www.google.com/search?q=`;
export const handleSearch = (search: string) => {
  const fullQuery = search.split(' ').join('+');
  const [command, ...toSearch] = search.split(' ');
  const query = toSearch.join('+');
  const hyphenatedQuery = toSearch.join('-');
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
    // AMAZON
    case 'amz':
      window.location.href = toSearch.length
        ? `https://www.amazon.com/s?k=${query}`
        : 'https://www.amazon.com';
      break;

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
    // DISNEY
    case 'disney':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.disneyplus.com';
      break;
    case 'dpb': {
      const url = toSearch.length
        ? `${atob('aHR0cHM6Ly9kb3BlYm94LnRvL3NlYXJjaC8=')}${hyphenatedQuery}`
        : `${atob('aHR0cHM6Ly9kb3BlYm94LnRvLw==')}`;
      window.location.href = url;
      break;
    }
    // EOL NASA
    case 'eol': {
      const url = toSearch.length
        ? defaultSearchUrl + fullQuery
        : `https://eol.jsc.nasa.gov/`;
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
        : 'https://www.github.com';
      break;
    // imdb
    case 'imdb':
      window.location.href = toSearch.length
        ? `https://www.imdb.com/find/?q=${query}`
        : 'https://www.imdb.com';
      break;
    // GOOGLE IMAGES
    case 'img':
      window.location.href = toSearch.length
        ? `https://www.google.com/search?tbm=isch&q=${query}`
        : 'https://www.google.com/search?tbm=isch';
      break;
    // NASA
    case 'nasa':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.nasa.gov/';
      break;
    // NETFLIX
    case 'netflix':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.netflix.com';
      break;
    // MAIL
    case 'gm':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://mail.google.com/mail/u/0/';
      break;
    // MAIL
    case 'gm1':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://mail.google.com/mail/u/1/';
      break;
    // GOOGLE MAPS
    case 'maps':
      window.location.href = toSearch.length
        ? `https://www.google.com/maps/search/${query}`
        : 'https://www.google.com/maps';
      break;
    // MAX
    case 'max':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.max.com';
      break;
    // PRIME
    case 'prime':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.primevideo.com/';
      break;
    // TF1
    case 'tf1':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.tf1.fr/';
      break;
    // TWITCH
    case 'ttv':
      window.location.href = toSearch.length
        ? `https://www.twitch.tv/search?term=${query}`
        : 'https://www.twitch.tv/';
      break;
    // TWITTER
    case 'twtr':
      window.location.href = toSearch.length
        ? defaultSearchUrl + fullQuery
        : 'https://www.x.com/';
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
        ? `https://www.meteo.be/nl/${hyphenatedQuery}`
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
    // site:reddit.com
    case ':red':
      window.location.href = toSearch.length
        ? `https://www.google.com/search?q=${query}+site:reddit.com`
        : defaultSearchUrl;
      break;
    default:
      window.location.href = `${defaultSearchUrl}${fullQuery}`;
      break;
  }
};

export const items: { key: string; label: string }[] = [
  { key: 'amz', label: 'Amazon' },
  { key: 'ddg', label: 'DuckDuckGo + Search' },
  { key: 'deepl', label: 'Deepl' },
  { key: 'disney', label: 'Disney+' },
  { key: 'eol', label: 'EOL NASA' },
  { key: 'fmhy', label: 'FreeMediaHeckYeah + Search' },
  { key: 'gpt', label: 'ChatGPT' },
  { key: 'gh', label: 'Github' },
  { key: 'imdb', label: 'IMDb + Search' },
  { key: 'img', label: 'Google Images + Search' },
  { key: 'nasa', label: 'Nasa' },
  { key: 'netflix', label: 'Netflix' },
  { key: 'gm', label: 'Gmail' },
  { key: 'gm1', label: 'Gmail' },
  { key: 'maps', label: 'Google Maps + Search' },
  { key: 'max', label: 'HBO' },
  { key: 'prime', label: 'Prime' },
  { key: 'tf1', label: 'TF1' },
  { key: 'ttv', label: 'Twitch + Search' },
  { key: 'twtr', label: 'Twitter' },
  { key: 'vrt', label: 'VRT MAX + Search' },
  { key: 'wtr', label: 'Weather(KMI) + Search' },
  { key: 'wiki', label: 'Wikipedia + Search' },
  { key: 'ytb', label: 'Youtube + Search' },
  { key: ':red', label: 'Search with site:reddit.com' },
];
