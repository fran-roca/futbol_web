<p align="center">
  <a href="" rel="noopener">
 <img width=720px height=400px src="https://drive.google.com/uc?export=view&id=15fTHuD76E-N2x137RIWYUp3CCHnRz8RC" alt="Project logo - stable diffusion"></a>
</p>

<h1 align="center">Futbol_web</h1>

<div align="center">

</div>

<p align="center"> This project has been designed to be the frontend of the futbol project.
    <br> 
</p>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [TODO](#todo)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project intends to have a follow-up of young players to make better decisions when signing for the youth soccer club. This project has been deployed to AWS and is currently used by over 50 scouts distributed in Europe creating networking between them.

[futbol](https://github.com/fran-roca/futbol) and [futbol_web](https://github.com/fran-roca/futbol_web) was developed in 3 weeks to help a friend with his use case. It was released to production with the minimum number of features and will be improved in the future as will need.

[futbol_web](https://github.com/fran-roca/futbol_web) has been developed with Angular and deployed in AWS Amplify.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

- You must have an instance of [futbol](https://github.com/fran-roca/futbol) running.
- You must have a MySQL database created, you can find the script [here](https://github.com/fran-roca/futbol/tree/master/model/scripts).

### Installing

1. Clone the repo
   ```sh
   git clone https://github.com/fran-roca/futbol_web
   ```
2. Build the project. The build artifacts will be stored in the `dist/` directory.
   ```sh
   ng build
   ```
3. Config the [environment.ts](src/environments/environment.ts)

## 🎈 Usage <a name="usage"></a>

Once the project is running you can open it on you web explorer, in localhost it would be http://localhost:4200/

You can see the project documentation [here](https://github.com/fran-roca/futbol_web/blob/b649a7a67b06e8e5f83916c3549b02db4de40e46/src/assets/documentation/documentation.md)

## TODO <a name="todo"></a>
- Translate the web page depending on the locale

## 🚀 Deployment <a name = "deployment"></a>

Futbol is divided into 3 modules and deployed in AWS:
- Database [MySQL](https://github.com/fran-roca/futbol/tree/master/model/scripts) - EC2
- Backend [futbol](https://github.com/fran-roca/futbol) - Elastic Beanstalk
- Frontend [futbol_web](https://github.com/fran-roca/futbol_web) - AWS Amplify

## ⛏️ Built Using <a name = "built_using"></a>

- [AWS](https://aws.amazon.com/) - Hosting Services
- [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4
- [Primefaces](https://www.primefaces.org/primeng/) - Angular UI component

## ✍️ Authors <a name = "authors"></a>

- [@fran-roca](https://github.com/fran-roca) - Idea & Initial work