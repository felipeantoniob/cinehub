<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![github-repo-size-shield]
![last-commit-badge]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">CineHub</h1>

  <p align="center">
Cinehub is a React TypeScript movie database app that allows users to search for and view movie details, using the TMDB API, with features such as pagination, error handling, and a responsive design.
 <br />
  <br />
     <a href="https://cinehub.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/felipeantoniob/cinehub/issues">Report Bug</a>
    ·
    <a href="https://github.com/felipeantoniob/cinehub/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Cinehub is a movie database app that allows users to search for movies and view details such as the plot summary, genres, and actors. The app is built with React and TypeScript, and uses the TMDB API to retrieve data on the movies.

The app includes features such as pagination support for movie search results, loading indicators and error handling for a smooth user experience, and a responsive design that works well on both desktop and mobile devices.

The purpose of this project is to provide a simple and easy-to-use movie database app that allows users to quickly find information on their favorite movies. It can be used as a reference for building similar apps with React and TypeScript, or as a starting point for building a more advanced movie database app with additional features.

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- EXAMPLES -->

## Examples

![Home Page Screenshot][home-page]
![Movie Modal Screenshot][movie-modal]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create an account and request an API key from [TMDB](https://www.themoviedb.org/documentation/api)

1. Clone the repo
   ```sh
   git clone https://github.com/felipeantoniob/cinehub.git
   ```
1. Install packages

   ```sh
   npm install
   ```

1. Create an `.env` file in the root of the project based on `.env.example`

### Usage

1. Run the development server

   ```sh
   npm run dev
   ```

2. Open http://localhost:3000 with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Felipe Antonio Buencamino - felipebuencamino@gmail.com.com

Project Link: [https://github.com/felipeantoniob/cinehub](https://github.com/felipeantoniob/cinehub)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [The TMDB API](https://www.themoviedb.org/documentation/api)
- [React Paginate](https://github.com/AdeleD/react-paginate)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/felipeantoniob/cinehub.svg?style=for-the-badge
[stars-url]: https://github.com/felipeantoniob/cinehub/stargazers
[issues-shield]: https://img.shields.io/github/issues/felipeantoniob/cinehub.svg?style=for-the-badge
[issues-url]: https://github.com/felipeantoniob/cinehub/issues
[license-shield]: https://img.shields.io/github/license/felipeantoniob/cinehub?style=for-the-badge
[license-url]: https://github.com/felipeantoniob/cinehub/blob/master/LICENSE.txt
[github-repo-size-shield]: https://img.shields.io/github/repo-size/felipeantoniob/cinehub?style=for-the-badge
[last-commit-badge]: https://img.shields.io/github/last-commit/felipeantoniob/cinehub?style=for-the-badge
[movie-modal]: .github/assets/movie-modal.png
[home-page]: .github/assets/home-page.png
