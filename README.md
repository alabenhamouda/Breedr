<div align="center">
<h1 style="color:#FEBB59">Breed<span style="color: white">r</span></h1>
  <p align="center">
    The first ever website for animal breeding!
    <br />
  </p>
</div>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contributors">Contributors</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-installation">Project Installation</a>
    </li>
  </ol>
</details>

## Contributors
This project was made possible through the efforts of :
* Ala Ben Hamouda
* Azer Chabbar
* Khalil Ben Abdallah
* Omar Maaref
* Taoufik Kaabi
## About The Project 
![screenshot](screentshots/screenshots.png)
Breedr allows its users to add their animals and control who they breed with as they wish.
### Built With
* frameworks used in this project:
[![](https://miro.medium.com/max/1400/0*3tPAAtU6SWhGwX58.png)][Angular-url]
[![](https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png)][Bootstrap-url]
[![](https://cdn.webo.digital/uploads/2022/09/Nestjs_hero1.png)][NestJS-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Angular-url]: https://angular.io/
[Bootstrap-url]: https://getbootstrap.com
[NestJs-url]: https://nestjs.com

## Project Installation
1. Clone the repo
   ```sh
   git clone https://github.com/KaabiTaoufik/Beeder.git
   ```
2. Run the app! <br/>
    All you have to do is to create the containers through docker
    ```sh
    docker-compose up -d
    ```
    Check if the backend container exited (it can exit due to a failure to connection to the database), if that's the case you may have to start it again.
    You're all set up.
    you can access the app with the following URL: http://localhost:8080
