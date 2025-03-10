const defaultSearchUrl = `https://startpage.com/do/dsearch?q=`;
export const handleSearch = (search: string) => {
  const fullQuery =
    defaultSearchUrl + search.replaceAll('+', '%2B').split(' ').join('+');
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

  if (!toSearch.length && command.match(/(\.)(.{2,3}$)/)) {
    window.location.href = `https://${command}`;
    return;
  } else {
    switch (command.toLowerCase()) {
      // ADS-B
      case 'adsb':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://globe.adsbexchange.com/';
        break;
      // AMAZON
      case 'amz':
        window.location.href = toSearch.length
          ? `https://www.amazon.com/s?k=${query}`
          : 'https://www.amazon.com';
        break;
      // Calendar
      case 'cal':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://calendar.google.com/calendar/u/0/r';
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
          ? 'https://www.deepl.com/en/translator#nl/en/' + toSearch.join(' ')
          : 'https://www.deepl.com/en/translator';
        break;
      // DISNEY
      case 'disney':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.disneyplus.com';
        break;
      case 'dpb': {
        const url = toSearch.length
          ? `${atob('aHR0cHM6Ly9kb3BlYm94LnRvL3NlYXJjaC8=')}${hyphenatedQuery}`
          : `${atob('aHR0cHM6Ly9kb3BlYm94LnRvLw==')}`;
        window.location.href = url;
        break;
      }
      // ebird
      case 'ebird':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://ebird.org/explore';
        break;
      // ebird
      case 'ebirdq':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://ebird.org/quiz/';
        break;
      // EOL NASA
      case 'eol': {
        const url = toSearch.length ? fullQuery : `https://eol.jsc.nasa.gov/`;
        window.location.href = url;
        break;
      }
      // FreeMediaHeckYeah
      case 'fmhy':
        window.location.href = toSearch.length
          ? // No search on this website so if the search is more than "gh", go back to google.
            fullQuery
          : 'https://fmhy.net/';
        break;
      // CHAT GPT
      case 'gpt':
        window.location.href = toSearch.length
          ? 'https://chatgpt.com/?q=' + query
          : 'https://chatgpt.com/';
        break;

      // CHAT GPT Temp
      case 'gpta':
        window.location.href = toSearch.length
          ? 'https://chatgpt.com/?temporary-chat=true&q=' + query
          : 'https://chatgpt.com/?temporary-chat=true';
        break;
      // GITHUB
      case 'gh':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.github.com';
        break;
      // GOOGLE
      case 'ggl':
        window.location.href = toSearch.length
          ? `https://www.google.com/search?q=${query}`
          : 'https://www.google.com';
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
      // Monkeytype
      case 'mty':
        window.location.href = toSearch.length
          ? fullQuery
          : 'http://monkeytype.com';
        break;
      // NASA
      case 'nasa':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.nasa.gov/';
        break;
      // NETFLIX
      case 'netflix':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.netflix.com';
        break;
      // MAIL
      case 'gm':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://mail.google.com/mail/u/0/';
        break;
      // MAIL
      case 'gm1':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://mail.google.com/mail/u/1/';
        break;
      // MAIL
      case 'lcg':
        window.location.href = toSearch.length
          ? `https://leagueofcomicgeeks.com/search?keyword=${query}`
          : 'https://leagueofcomicgeeks.com/';
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
          ? fullQuery
          : 'https://www.max.com';
        break;
      // POMODORO
      case 'pomodoro':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://slowsby.github.io/pomodoro/';
        break;

      // PRIME
      case 'prime':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.primevideo.com/';
        break;
      // rng
      case 'rng':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://slowsby.github.io/NumberGenerator/';
        break;
      // TF1
      case 'tf1':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.tf1.fr/';
        break;
      // TWITCH
      case 'ttv':
        window.location.href = toSearch.length
          ? `https://www.twitch.tv/search?term=${query}`
          : 'https://www.twitch.tv/';
        break;
      // VRT Nieuws
      case 'vrtn':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://www.vrt.be/vrtnws/nl/';
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
          ? fullQuery
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
      case 'mdn':
        window.location.href = toSearch.length
          ? `https://developer.mozilla.org/en-US/search?q=${query}`
          : 'https://developer.mozilla.org/en-US/';
        break;
      case 'she':
        window.location.href = toSearch.length
          ? fullQuery
          : 'https://docs.google.com/spreadsheets/u/0/';
        break;
      default:
        window.location.href = fullQuery;
        break;
    }
  }
};
export const items: { key: string; label: string }[] = [
  { key: 'adsb', label: 'ADS-B Exchange' },
  { key: 'amz', label: 'Amazon' },
  { key: 'cal', label: 'Google Calendar' },
  { key: 'ggl', label: 'Google + Search' },
  { key: 'deepl', label: 'Deepl' },
  { key: 'disney', label: 'Disney+' },
  { key: 'ebird', label: 'eBird + Autocomplete' },
  { key: 'ebirdq', label: 'eBird Quiz' },
  { key: 'eol', label: 'EOL NASA' },
  { key: 'fmhy', label: 'FreeMediaHeckYeah' },
  { key: 'gpt', label: 'ChatGPT' },
  { key: 'gpta', label: 'ChatGPT Temporary Chat' },
  { key: 'gh', label: 'Github' },
  { key: 'imdb', label: 'IMDb + Search' },
  { key: 'img', label: 'Google Images + Search' },
  { key: 'mty', label: 'Monkeytype' },
  { key: 'nasa', label: 'Nasa' },
  { key: 'netflix', label: 'Netflix' },
  { key: 'gm', label: 'Gmail' },
  { key: 'gm1', label: 'Gmail' },
  { key: 'lcg', label: 'League Of Comic Geeks + Search' },
  { key: 'maps', label: 'Google Maps + Search' },
  { key: 'max', label: 'HBO' },
  { key: 'pomodor', label: 'Pomodoro' },
  { key: 'prime', label: 'Prime' },
  { key: 'rng', label: 'Random Number Generator' },
  { key: 'she', label: 'Sheets' },
  { key: 'tf1', label: 'TF1' },
  { key: 'ttv', label: 'Twitch + Search' },
  { key: 'vrt', label: 'VRT MAX + Search' },
  { key: 'vrtn', label: 'VRT Nieuws' },
  { key: 'wtr', label: 'Weather(KMI) + Search' },
  { key: 'wiki', label: 'Wikipedia + Search' },
  { key: 'ytb', label: 'Youtube + Search' },
  { key: ':red', label: 'Search with site:reddit.com' }
];
