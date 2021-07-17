<!-- PROJECT SHIELDS -->
<!-- See the bottom of this document for the declaration of the reference variables -->

[![License: MIT][license-shield]][license-url]
![Version](https://img.shields.io/badge/version-0.2.0-6bd4a7)
![Size](https://github-size-badge.herokuapp.com/totoledao/alurakut.svg)
![Platform](https://img.shields.io/badge/platform-Web-7F00FF)

[![React][react-shield]][react-url]
[![Java Script][javascript-shield]][javascript-url]

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://alurakut-totoledao.vercel.app/">
    <img src="readmeAssets/Alurakut%20Logo.png" alt="Logo" width="150">
  </a>

  <h3 align="center">Alurakut</h3>

  <p align="center">
    Orkut is back!
    <br />
    <a href="https://github.com/totoledao/alurakut"><strong>Check it out»</strong></a>    
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#technologies">Technologies</a></li>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Alurakut](./readmeAssets/Home.jpg)

**A social network inspired by the classic Orkut**

App created during Imersão React 3rd edition by [Alura](https://alura.com.br/).

### Built With

* [React](https://reactjs.org/)
* [Javascript](http://www.ecmascript.org/)
* [Next.js](https://nextjs.org/)

### Technologies
* Styled-components
* GraphQL
* DatoCMS
* datocms-client

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/totoledao/alurakut.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Replace *TOKEN* and *itemType* in **/api/communityCreator.js.example** with [your Dato project](https://dashboard.datocms.com/) keys and delete **.example** from the file extension
   ```sh
    const TOKEN = 'YOUR_API_READWRITE_TOKEN' 
    itemType: 'YOUR_Community_model_ID_from_DatoCMS'
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

<img src="readmeAssets/Alurakut%20Logo.png" alt="Logo" width="200">

<!-- CONTRIBUTING -->
## Contributing

Contributions make the open source community such an amazing place to be, learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`][license-url] for more information.



<!-- CONTACT -->
## Contact

Guilherme Toledo - guilherme-toledo@live.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilhermemtoledo/)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/totoledao)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/totoledao)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=whit)](https://www.github.com/totoledao)


Project Link: [https://github.com/totoledao/alurakut](https://github.com/totoledao/alurakut)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: https://github.com/totoledao/alurakut/blob/main/MIT-LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0e76a8
[linkedin-url]: http://www.linkedin.com/in/guilhermemtoledo

[react-shield]:https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[react-url]: https://reactjs.org/

[javascript-shield]:https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black

[javascript-url]: http://www.ecmascript.org/