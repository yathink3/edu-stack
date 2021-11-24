import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(JSON.parse(window.localStorage.getItem('dark-mode') || 'false'));
  useEffect(() => {
    const className = 'dark';
    const element = window.document.body;
    if (enabled) element.classList.add(className);
    else element.classList.remove(className);
    window.localStorage.setItem('dark-mode', JSON.stringify(enabled));
  }, [enabled]);
  return [enabled, setEnabled];
};

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='md:col-span-1 px-2 my-2 rounded transition duration-200 focus:outline-none dark:focus:bg-gray-700 dark:hover:bg-gray-700 focus:bg-blue-400 hover:bg-blue-500 w-10 h-10'>
      {darkMode ? (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
      ) : (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='12' cy='12' r='5'></circle>
          <line x1='12' y1='1' x2='12' y2='3'></line>
          <line x1='12' y1='21' x2='12' y2='23'></line>
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
          <line x1='1' y1='12' x2='3' y2='12'></line>
          <line x1='21' y1='12' x2='23' y2='12'></line>
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggler;
