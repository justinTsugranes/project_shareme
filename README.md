<a name="readme-top"></a>

<!-- TODO: INSERT STATUS BADGES -->
<!-- INSERT STATUS BADGES HERE -->

<!-- PROJECT HEADING -->
<br />
<div align="center">
  <a href="https://github.com/justintsugranes/">
    <img src="images/logo.jpg" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- TODO: CHANGE PROJECT TITLE -->

### [ShareMe][project-url]

<!-- TODO: ADD SHORT PROJECT DESCRIPTION -->

Full Stack Social App built with React. Project includes TailwindCSS, Sanity CMS, and Google Auth

[Explore the docs]([repo-url]) -- [View Demo]([project-url]) -- [Report Bug]([issues-url])

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screen Shot][project-screenshot]][project-url] [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url]

<!-- TODO: ADD LONG PROJECT DESCRIPTION -->

LONG_PROJECT_DESCRIPTION

_I'd love to hear any feedback or just thoughts. Feel free to reach out at my contact info below. Cheers!_

### Stack

#### Backend

- **API**
  <!-- [![node]][node-url] -->
  <!-- [![express]][express-url] -->
  <!-- [![axios]][axios-url] -->
  <!-- [![postman]][postman-url] -->
- **Database**
  <!-- [![fauna]][fauna-url] -->
  <!-- [![graphql]][graphql-url] -->
  <!-- [![mongodb]][mongodb-url] -->
  <!-- [![postgres]][postgres-url] -->

<!-- - Proxy -->
  <!-- [![nginx]][nginx-url] -->

#### Frontend

- **Web**
  <!-- [![angular]][angular-url] -->
  <!-- [![jquery]][jquery-url] -->
  <!-- [![laravel]][laravel-url] -->
  <!-- [![next]][next-url] -->
  <!-- [![react]][react-url] -->
  <!-- [![svelte]][svelte-url] -->
  <!-- [![vue]][vue-url] -->

- **React Management**

  <!-- [![redux]][redux-url] -->
  <!-- [![remix]][remix-url] -->
  <!-- [![react-query]][react-query-url] -->
  <!-- [![react-router]][react-router-url] -->

- **UI Frameworks**
  <!-- - [![material-ui]][material-ui-url] -->
  <!-- - [![chakra-ui]][chakra-ui-url] -->

- **CSS Libraries**

  <!-- [![bootstrap]][bootstrap-url] -->
  <!-- - [![tailwind]][tailwind-url] -->

- **Mobile (iOS, Android)**

  <!-- [![react-native]][react-native-url] -->
  <!-- [![flutter]][flutter-url] -->

#### DevOps

<!-- [![docker]][docker-url] -->
<!-- [![circle-ci]][circle-ci-url] -->
<!-- [![jenkins]][jenkins-url] -->
<!-- [![kubernetes]][kubernetes-url] -->
<!-- [![travis-ci]][travis-ci-url] -->

#### Deployment

<!-- [![heroku]][heroku-url] -->
<!-- [![netlify]][netlify-url] -->
<!-- [![vercel]][vercel-url] -->

#### Security / Auth

<!-- [![jwt]][jwt-url] -->

#### Testing

<!-- [![cypress]][cypress-url] -->
<!-- [![jest]][jest-url] -->

#### Content Management

<!-- [![contentful]][contentful-url] -->
<!-- [![sanity]][sanity-url] -->
<!-- [![strapi]][strapi-url] -->

#### Misc Packages

<!-- [![]][-url] -->

<!-- TODO: UPDATE INFO -->
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- TODO: UPDATE PREREQUISITES -->

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

<!-- TODO: UPDATE INSTALLATION INFO -->

### Installation

1. Get a free API Key at [https://example.com][api-key-link]

2. Clone the repo

   ```sh
   git clone https://github.com/justintsugranes/project_mern-goals-app.git
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. Enter your API in `config.js`

   ```js
   const API_KEY = 'ENTER YOUR API'
   ```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation][repo-url]_ -->

<!-- OG README -->

### Folder Structure

```project-root/
  ├── backend/
  │   ├── docker-setup/
  │   └── ...
  └── frontend/
  │   ├── docker-setup/
  │   └── ...
  ├── docker-compose.yml
  ├── docker-compose.production.yml
```

OR

    fsja
      ├── backend
      │   ├── api
      │   │   > NodeJS
      │   │   > PORT 8000
      │   │   > api.example.com
      │   │
      │   ├── database
      │   │   > MongoDB
      │   │   > PORT 27017
      │   │
      │   └── proxy
      │       > NGINX
      │       > PORT 80 / 443
      │
      ├── deployment
      │   > Docker Compose
      │
      ├── frontend
      │   ├── app
      │   │   ├── mobile
      │   │   │   > React Native
      │   │   │   > iOS (Apple App Store)
      │   │   │   > Android (Google Play Store)
      │   │   │
      │   │   └── web
      │   │       > React
      │   │       > Single page application
      │   │       > PORT 5000
      │   │       > app.example.com
      │   │
      │   └── landing
      │       > React
      │       > Server side rendered
      │       > PORT 3000
      │       > example.com
      │
      └── README.md (you are here)

## Features

### Frontend Features

1. Bootstrap used as the CSS library.
2. SCSS compatible.
3. React-Router enabled.
4. Font-Awesome used as the Icon library.
5. Axios enabled and configured as an custom interceptor that can send requests with a JWT token.
6. React-Tostify used for showing success / error messages.
7. Docker setup folder structure:

```
docker-setup/
├── nginx/
│   ├── .conf
└── react/
    ├── development/
    │   └── Dockerfile
    └── production/
        └── Dockerfile
```

<!-- TODO: UPDATE ROADMAP -->
<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<!-- TODO: UPDATE LICENSE IF NECESSARY -->
<!-- LICENSE -->

## License

Distributed under the [MIT License][license-url]. See `LICENSE.md` for more information.

<!-- CONTACT -->

## Contact

- [Email](mailto:justinjontsugranes@gmail.com?subject=Hi 'Hi, from GitHub!')
- [Website](https://justintsugranes.com)
- [GitHub @justintsugranes](https://github.com/justintsugranes 'Justin Tsugranes')
- [LinkedIn @justin-tsugranes](https://linkedin.com/in/justintsugranes)
- [Twitter @justintsugranes](https://twitter.com/justintsugranes)

[View Live Project][project-url]

## 🤝 Support

Give a ⭐️ if you like this project and if you like my work, maybe you would like to

<a href="https://www.buymeacoffee.com/tsugranes" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" width="150"></a>

<!-- or -->

<!-- Send me some [![bitcoin]][bitcoin-address] or [![ethereum]][ethereum-address] -->

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- TODO: UPDATE PROJECT INFO -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[repo-url]: https://github.com/justinTsugranes/project_shareme
[project-url]: https://justintsugranesmerngoalsapp.herokuapp.com/
[project-screenshot]: images/project-screenshot.jpg
[contributors-shield]: https://img.shields.io/github/contributors/justintsugranes/project_shareme.svg?style=for-the-badge
[contributors-url]: https://github.com/justintsugranes/project_shareme/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/justintsugranes/project_shareme.svg?style=for-the-badge
[forks-url]: https://github.com/justintsugranes/project_shareme/network/members
[stars-shield]: https://img.shields.io/github/stars/justintsugranes/project_shareme.svg?style=for-the-badge
[stars-url]: https://github.com/justintsugranes/project_shareme/stargazers
[issues-shield]: https://img.shields.io/github/issues/justintsugranes/project_shareme.svg?style=for-the-badge
[issues-url]: https://github.com/justintsugranes/project_shareme/issues
[license-shield]: https://img.shields.io/github/license/justintsugranes/project_shareme.svg?style=for-the-badge
[license-url]: https://github.com/justinTsugranes/project_shareme/blob/main/LICENSE.md

<!-- TECH SHIELDS/LINKS -->

<!-- CSS LIBRARIES / UI FRAMEWORKS -->

<!-- [bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com -->
<!-- [chakra-ui]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[chakra-ui-url]: https://getbootstrap.com -->
<!-- [material-ui]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[material-ui-url]: https://getbootstrap.com -->

[tailwind]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[tailwind-url]: https://getbootstrap.com

<!-- JS LIBRARIES / FRAMEWORKS -->

<!-- [angular]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/ -->
<!-- [flutter]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[flutter-url]: https://angular.io/ -->
<!-- [jquery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com -->
<!-- [laravel]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com -->
<!-- [next]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/ -->

[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/

<!-- [react-native]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-native-url]: https://reactjs.org/ -->
<!-- [svelte]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/ -->
<!-- [vue]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/ -->

<!-- REACT MANAGEMENT -->

<!-- [redux]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[redux-url]: https://redux.js.org/ -->
<!-- [remix]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[remix-url]: https://redux.js.org/ -->
<!-- [react-query]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[react-query-url]: https://redux.js.org/ -->
<!-- [react-router]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[react-router-url]: https://redux.js.org/ -->

<!-- BACKEND -->

<!-- [express]: https://img.shields.io/badge/Express.js-563D7C?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://getbootstrap.com -->
<!-- [node]: https://img.shields.io/badge/Node.Js-2343853?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/ -->

<!-- API -->

<!-- [axios]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[axios-url]: https://axios-http.com/ -->
<!-- [postman]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[postman-url]: https://www.postman.com/ -->

<!-- DATABASE -->

<!-- [graphql]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[graphql-url]: https://www.postgresql.org/ -->
<!-- [mongodb]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/home -->
<!-- [postgresql]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[postgresql-url]: https://www.postgresql.org/ -->

<!-- CONTENT MANAGEMENT -->
<!-- [sanity]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[sanity-url]: https://www.postgresql.org/ -->
<!-- [contentful]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[contentful-url]: https://www.postgresql.org/ -->
<!-- [strapi]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[strapi-url]: https://www.postgresql.org/ -->

<!-- AUTH / SECURITY-->

<!-- [jwt]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[jwt-url]: https://jwt.io/ -->
<!-- [google-autg]:https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[google-auth-url]:  -->

<!-- DEVOPS -->

<!-- [circle-ci]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[circle-ci-url]: https://www.docker.com/ -->
<!-- [docker]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[docker-url]: https://www.docker.com/ -->
<!-- [jenkins]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[jenkins-url]: https://www.jenkins.io/ -->
<!-- [kubernetes]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[kubernetes-url]: https://www.docker.com/ -->
<!-- [travis-ci]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[travis-ci-url]: https://www.docker.com/ -->

<!-- HOSTING -->

<!-- [heroku]: https://img.shields.io/badge/Heroku-563D7C?style=for-the-badge&logo=heroku&logoColor=white
[heroku-url]: https://www.heroku.com/ -->
<!-- [netlify]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[netlify-url]: https://www.jenkins.io/ -->
<!-- [vercel]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[vercel-url]: https://www.jenkins.io/ -->

<!-- TESTING -->

<!-- [cypress]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[cypress-url]: https://www.jenkins.io/ -->
<!-- [jest]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[jest-url]: https://www.jenkins.io/ -->

<!-- CRYPTOCURRENCY -->

<!-- [bitcoin]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bitcoin-url]: https://www.jenkins.io/ -->
<!-- [ethereum]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[ethereum-url]: https://www.jenkins.io/ -->

<!-- MISC PACKAGES -->

<!-- [bcrypt-url]: https://www.npmjs.com/package/bcrypt -->
<!-- [colors-url]: https://www.npmjs.com/package/colors -->
<!-- [concurrently-url]: https://www.npmjs.com/package/concurrently -->
<!-- [font-awesome-url]: https://fontawesome.com/ -->
<!-- [formik-url]: -->
<!-- [lodash-url]: https://lodash.com/ -->
<!-- [mongoose]: https://mongoosejs.com/docs/ -->
<!-- [react-icons-url]: https://www.npmjs.com/package/react-icons -->
<!-- [react-parallax-url]: -->
<!-- [react-player-url]: -->
<!-- [react-spring-url]: -->
<!-- [react-toastify-url]: https://www.npmjs.com/package/react-toastify -->
<!-- [shields.io-url]: -->
<!-- [storybook-url]: -->
<!-- [swiper-url]: -->
