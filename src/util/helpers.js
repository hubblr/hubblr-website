/* eslint import/prefer-default-export: "off" */
import React from 'react';

export const RFC3339 = 'YYYY-MM-DD\\THH:mm:ssZ';

export const CallbackOnEnter = (callback) => (e) => {
  e.persist();
  if (e.key === 'Enter' && !e.shiftKey && typeof callback === 'function') {
    callback(e);
  }
};

export const arraysHaveEqualValuesDeep = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((aEl) => b.includes(aEl));
};

const newlineRegex = /(\r\n|\r|\n)/g;

export const nl2br = (text) => {
  if (typeof text === 'number') {
    return text;
  }

  if (typeof text !== 'string') {
    return '';
  }

  return text.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      // eslint-disable-next-line
      return React.createElement('br', { key: index });
    }

    return line;
  });
};

export const millisecondsToHours = (milliseconds) => milliseconds / 1000 / 60 / 60;

export const prefixZeroIfNotPresent = (number) => {
  if (number >= 10) {
    return number;
  }

  return `0${number}`;
};

// http://davidwalsh.name/javascript-debounce-function
/* eslint-disable */
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/* eslint-enable */

export const deepEqualityCheck = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    return a.every((aEl, aIdx) => deepEqualityCheck(aEl, b[aIdx]));
  }

  // if its about scalar types, just fall back to basic equality checking
  if (typeof a !== 'object' || (a === null && b === null) || (a === undefined && b === undefined)) {
    return a === b;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  const aPropertyNames = a === null ? [] : Object.getOwnPropertyNames(a);
  const bPropertyNames = b === null ? [] : Object.getOwnPropertyNames(b);
  if (aPropertyNames.length !== bPropertyNames.length) {
    return false;
  }

  return aPropertyNames.every((aPropertyName) =>
    deepEqualityCheck(a[aPropertyName], b[aPropertyName])
  );
};

export const wrapDOMElement = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

// Math.random should be unique because of its seeding algorithm.
// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.
export const generateUniqueID = () => Math.random().toString(36).substr(2, 9);

export const MobileBreakpoint = 785; // one less than tailwind sm class

export const TabletBreakpoint = 1023; // one less than tailwind lg class

export const IsScreenMD = typeof window !== 'undefined' && window.innerWidth > MobileBreakpoint;

export const IsScreenLG = typeof window !== 'undefined' && window.innerWidth > TabletBreakpoint;

/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
export const DesktopQuery = (props) => <div {...props} className="desktop-only" />;

export const TabletQuery = (props) => <div {...props} className="tablet-only" />;

export const MobileAndTabletQuery = (props) => <div {...props} className="mobile-and-tablet" />;

export const MobileQuery = (props) => <div {...props} className="mobile-only" />;

/* eslint-enable react/jsx-filename-extension,react/jsx-props-no-spreading */

export const addClassToBody = (cl) => {
  document.body.classList.add(cl);
};

export const removeClassFromBody = (cl) => {
  document.body.classList.remove(cl);
};
