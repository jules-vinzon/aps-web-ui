import { getCookie, setCookies, removeCookies, checkCookies } from 'cookies-next';
import { v4 as uuidv4 } from 'uuid';

export const setCookie = (key, value) => {
  try {
  if (process.browser) {
      setCookies(key, value, {
        // maxAge: 1,
        sameSite: 'strict',
        path: '/',
      });
    }
  } catch(e) {
    console.log('ERROR ON SET COOKIE', e);
  }
};

export const setSession = () => {
  const sessionToken = checkCookies('S_0001');
  if (!sessionToken) setCookie('S_0001', uuidv4());
  removeCookies('S_0002');
  setCookie('S_0002', uuidv4());
}

export const setSessionTheme = (config) => {
  if (config.uiConfig && config.uiConfig.theme) {
    // console.log('CONFIG', config.uiConfig.theme);
    const uiConf = config.uiConfig.theme;
    const sessionToken = checkCookies('S_0003');

    const string = JSON.stringify(uiConf) // convert Object to a String
    const encodedString = btoa(string)
    if (!sessionToken) setCookie('S_0003', encodedString);
    removeCookies('S_0003');
    setCookie('S_0003', encodedString);
  }
}


export const getSession = () => {
  const sessionToken = getCookies('S_0001');
  const momentToken = getCookies('S_0002');
  const themeToken = getCookies('S_0003');
  const defaultTheme = {
    backgroundColor: '#EDF1F6',
    buttonBgColor: '#003087',
    buttonColor: '#ffffff',
    linkColor: '#003087',
    tabBgColor: '#EEF1F6',
    tabColor: '#57B333'
  };
  return {
    session: sessionToken,
    moment: momentToken,
    theme: themeToken ? JSON.parse(atob(themeToken)) : defaultTheme,
  }
}


export const removeCookie = key => {
  if (process.browser) {
    removeCookies(key);
  }
};

export const getCookies = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return getCookie(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawsplit('=')[1];
};