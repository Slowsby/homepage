import Time from './components/Time';
import Date from './components/Date';
import ASCII from './components/ASCII';
import Help from './components/Help';
import Weather from './components/Weather';
import Christmas from './components/events/Christmas';
import WorldClock from './components/WorldClock';
import RenderBirdResults from './components/EbirdResults';
import { useEffect, useRef, useState } from 'react';
import { handleSearch } from './tools/search';
import { getCurrentDate } from './utils/getCurrentDate';
import { getTimeDiff } from './utils/getCurrentDate';
import gitMark from '/github-mark-white.png';

type Bird = {
  code: string;
  name: string;
};

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [isHelpVisible, setHelpVisible] = useState<boolean>(false);
  const [isClockVisible, setClockVisible] = useState<boolean>(false);
  const [showTimeDiff, setShowTimeDiff] = useState<boolean>(false);
  const [timeDiff, setTimeDiff] = useState<string>('');
  const [birdResults, setBirdResults] = useState<Bird[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isHelpVisible) {
      inputRef.current?.focus();
    }
  }, [isHelpVisible]);

  const handleEvent = (e: KeyboardEvent) => {
    if (e.key === 'q' && (isHelpVisible || isClockVisible)) {
      setClockVisible(false);
      setHelpVisible(false);
      setSearch('');
      return;
    }
    if (
      (e.code === 'Enter' || e.code === 'NumpadEnter') &&
      (isHelpVisible || isClockVisible)
    ) {
      setSearch('');
      setHelpVisible(false);
      setClockVisible(false);
      return;
    } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      if (search.startsWith('ebird ')) {
        // Return nothing when using the ebird autocomplete
        return;
      }
      if (search === 'hh') {
        setHelpVisible(true);
        return;
      } else if (search === 'time') {
        setClockVisible(true);
        return;
      } else if (search.match(/^([0-9]|[1-9][0-9])h ago$/gi)) {
        setTimeDiff(getTimeDiff(parseInt(search)));
        setShowTimeDiff(true);
        setTimeout(() => {
          setShowTimeDiff(false);
        }, 2500);
        return;
      } else {
        handleSearch(search);
        setSearch('');
      }
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    const clipboardItems = e.clipboardData?.items;

    if (clipboardItems) {
      const item = clipboardItems[0];
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          // If 'f' is entered in the search bar, show image in new tab
          if (search.toLowerCase().includes('f')) {
            // Create an object URL for the image
            const imageUrl = URL.createObjectURL(file);
            window.open(imageUrl, '_blank');
            // else, open google lens to do an image search
          } else {
            window.open('https://lens.google.com/search?p');
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEvent);
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('paste', handlePaste);
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      if (search.startsWith('ebird ')) {
        try {
          const res = await fetch(
            // public api
            `https://api.ebird.org/v2/ref/taxon/find?locale=fr&cat=species&key=jfekjedvescr&q=${search.replace('ebird ', '')}`
          );
          const data = await res.json();
          setBirdResults(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    if (search.match(/^ebird\s.{3,}$/gi)) {
      fetchData();
    }
  }, [search]);

  return (
    <>
      <div className='absolute flex text-white justify-between w-full p-5'>
        <Weather />
        <button
          onClick={() => (window.location.href = 'https://github.com/Slowsby')}
        >
          <img className='w-8 h-8' src={gitMark} />
        </button>
      </div>
      <div
        className={`${getCurrentDate()} h-screen bg-cover text-white flex flex-col items-center justify-center`}
      >
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex-col md:mr-24'>
            <div id='time' className='text-5xl my-2'>
              <Time />
            </div>
            <div id='date' className='text-3xl mb-4'>
              <Date />
            </div>
            <div className='relative w-80 mt-8'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer'>
                <svg
                  onClick={() => (search ? handleSearch(search) : '')}
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  x='0px'
                  y='0px'
                  width='24px'
                  height='24px'
                  viewBox='0 0 612.08 612.08'
                  xmlSpace='preserve'
                >
                  <path
                    d='M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
              c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
              c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
              M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
              S338.402,419.811,237.927,419.811z'
                  />
                </svg>
              </div>
              {getCurrentDate() === 'bg-christmas-bg' &&
              !isHelpVisible &&
              !isClockVisible ? (
                <Christmas />
              ) : null}
              <input
                ref={inputRef}
                value={search}
                type='text'
                className='block w-full md:w-96 p-2 ps-12 text-lg border rounded-2xl text-black placeholder:text-[#5A5A5A] bg-[#9E9E9E] border-[#9e9e9e] focus:outline-none'
                placeholder={`"This is my gift, my curse"`}
                onChange={(e) => {
                  if (!isHelpVisible) {
                    setSearch(e.target.value.toString());
                  }
                }}
                required
              />
              <div></div>
            </div>
            {showTimeDiff ? (
              <p className='flex justify-center mt-5 text-lg'>{timeDiff}</p>
            ) : null}
            {search.startsWith('ebird') && birdResults ? (
              <div className='absolute flex flex-col overflow-y-auto max-h-60'>
                {RenderBirdResults(birdResults)}
              </div>
            ) : null}
          </div>
          <div>
            <ASCII />
          </div>
          {isHelpVisible ? <Help /> : null}
          {isClockVisible ? <WorldClock /> : null}
        </div>
      </div>
    </>
  );
}
