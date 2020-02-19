import useLocalStorage from './useLocalStorage.js';
import useEffect from 'react';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue)

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('darkMode')
        : document.querySelector('body').classList.remove('darkMode');
    }, [darkMode]);
    return [darkMode, setDarkMode];
}

export default useDarkMode;