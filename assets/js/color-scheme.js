// Setup darkreader for CORS
DarkReader.setFetchMethod(url => {
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', '*');

  return window.fetch(url, {
    headers,
    mode: 'no-cors',
  });
});

function darkModeSelected() {
  let darkModeSelected = localStorage.getItem('darkMode');

  if (darkModeSelected === 'false') {
    return false;
  }
  if (darkModeSelected === 'true') {
    return true;
  }
  return darkModeSelected;
}

function darkModeEnabled() {
  if (darkModeSelected() === true) {
    return true;
  }
  if (darkModeSelected() === null && darkModePreferred === true) {
    return true;
  }
  return false;
}

// set color mode and icons on page load
function checkDarkMode() {
  if (darkModeEnabled()) {
    DarkReader.enable();
  } else {
    DarkReader.disable();
  }
  toggleIcon();
}

function toggleDarkMode() {
  if (darkModeEnabled()) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  DarkReader.enable();
  localStorage.setItem('darkMode', 'true');
  toggleIcon();
}

function disableDarkMode() {
  DarkReader.disable();
  localStorage.setItem('darkMode', 'false');
  toggleIcon();
}

function toggleIcon() {
  if (iconDarkMode.classList.contains('fa-sun')) {
    // Change to fa-moon
    iconDarkMode.classList.remove('fa-sun');
    iconDarkMode.classList.add('fa-moon');
    iconDarkMode.style.color = 'blue';
  } else {
    // Change to fa-sun
    iconDarkMode.classList.remove('fa-moon');
    iconDarkMode.classList.add('fa-sun');
    iconDarkMode.style.color = 'yellow';
  }
}
