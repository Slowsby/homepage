import Time from './components/Time';
import Date from './components/Date';
import ASCII from './components/ASCII';
import Help from './components/Help';
import Weather from './components/Weather';
import Christmas from './components/events/Christmas';
import { useEffect, useRef, useState } from 'react';
import { handleSearch } from './tools/search';
import gitMark from './assets/github-mark-white.png';
export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [isHelpVisible, setHelpVisible] = useState<boolean>(false);
  const [christmasTheme, setChristmasTheme] = useState<boolean>(false);
  const [isChristmas, setIsChristmas] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isHelpVisible) {
      inputRef.current?.focus();
    }
  }, [isHelpVisible]);

  const handleEvent = (e: KeyboardEvent) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && isHelpVisible) {
      setSearch('');
      setHelpVisible(false);
      inputRef.current?.focus();
      return;
    } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      if (search === 'hh') {
        inputRef.current?.blur();
        setHelpVisible(true);
        return;
      }
      handleSearch(search);
      setSearch('');
    }
  };
  const getCurrentDate = (s: string) => {
    if (s.includes('December 25')) {
      setIsChristmas(true);
      setChristmasTheme(true);
    } else if (!s.includes('December 25') && s.includes('December')) {
      setIsChristmas(false);
      setChristmasTheme(true);
    } else {
      setChristmasTheme(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEvent);
    return () => {
      window.removeEventListener('keydown', handleEvent);
    };
  });
  return (
    <>
      <div className='absolute flex text-white justify-between w-full p-5'>
        <Weather />
        {isChristmas ? (
          <p className='relative text-5xl font-mono'>Merry Christmas ! </p>
        ) : null}
        <button
          onClick={() => (window.location.href = 'https://github.com/Slowsby')}
        >
          <img className='w-8 h-8' src={gitMark} />
        </button>
      </div>
      {christmasTheme ? <Christmas /> : null}
      <div
        className={`${christmasTheme ? 'bg-christmas-bg' : 'bg-main-bg'} h-screen bg-cover text-white flex flex-col items-center justify-center`}
      >
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex-col md:mr-24'>
            <div id='time' className='text-5xl my-2'>
              <Time />
            </div>
            <div id='date' className='text-3xl mb-4'>
              <Date exportDate={getCurrentDate} />
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
              <input
                ref={inputRef}
                value={search}
                type='text'
                className='block w-full md:w-96 p-2 ps-12 text-lg border rounded-2xl text-black placeholder:text-[#5A5A5A] bg-[#9E9E9E] border-[#9e9e9e] focus:outline-none'
                placeholder={`"This is my gift, my curse"`}
                onChange={(e) => setSearch(e.target.value.toString())}
                required
              />
            </div>
          </div>
          <div>
            <ASCII />
          </div>
          {isHelpVisible ? <Help /> : ''}
        </div>
      </div>
    </>
  );
}
