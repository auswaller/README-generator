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

function renderLicenseSection(license) {
  if(license == '' || license == null){
    return '';
  }
  else{
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}
    \nThis project is covered under the ${license} license. Click the badge for more info.`;
  }
};

function generateMarkdown(data) {
  return `# ${data.name} \n${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation Instuctions](#installation-instuctions)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation Instuctions
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributions}
  ## Tests
  ${data.test}
  ## Questions
  [GitHub](https://github.com/${data.github}) 
  \nReach out with any questions to: [${data.email}](mailto:${data.email})
`;
};

module.exports = generateMarkdown;