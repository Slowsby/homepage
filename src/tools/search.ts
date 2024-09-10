const defaultSearchUrl = `https://www.google.com/search?q=`;
export const handleSearch = (search: string) => {
  const [command, ...toSearch] = search.split(' ');
  const query = toSearch.join('+');

  // Shortened commands to search/goto a specific site. e.g.: "ytb" =>  will go to "youtube.com"
  //                                                          "ytb Me at the zoo" => will search "Me at the zoo" on youtube
  switch (command.toLowerCase()) {
    // DUCKDUCKGO
    case 'ddg':
      window.location.href = toSearch.length
        ? `https://www.duckduckgo.com/?t=h_&q=${query}`
        : 'https://www.duckduckgo.com';
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
          defaultSearchUrl + search
        : 'https://fmhy.net/';
      break;
    // CHAT GPT
    case 'gpt':
      window.location.href = toSearch.length
        ? defaultSearchUrl + search
        : 'https://chatgpt.com/';
      break;
    // GITHUB
    case 'gh':
      window.location.href = toSearch.length
        ? defaultSearchUrl + toSearch
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
        ? defaultSearchUrl + search
        : 'https://www.tf1.fr/';
      break;
    // VRT MAX
    case 'vrt':
      window.location.href = toSearch.length
        ? defaultSearchUrl + search
        : 'https://www.vrt.be/vrtmax/';
      break;
    case 'whoami':
      window.location.href = toSearch.length
        ? defaultSearchUrl + search
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
      window.location.href = `${defaultSearchUrl}${search}`;
      break;
  }
};
