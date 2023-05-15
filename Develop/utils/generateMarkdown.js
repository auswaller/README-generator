// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      renderLic = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Apache License 2.0':
      renderLic = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GNU GPLv3':
      renderLic = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'ISC License':
      renderLic = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
      break;
    default:
      renderLic = '';
  }
  return renderLic;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      linkLic = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0':
      linkLic = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPLv3':
      linkLic = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC License':
      linkLic = '(https://opensource.org/licenses/ISC)';
      break;
    default:
      linkLic = '';
  }
  return linkLic;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == '' || license == null){
    return '';
  }
  else{
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  # License
  ${renderLicenseSection(data.license)}

`;
};

module.exports = generateMarkdown;