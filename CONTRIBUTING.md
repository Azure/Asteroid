# Contributing to Asteroid

Thank you for considering contributing to **Asteroid**!

This document outlines the contribution process and provides guidelines for making contributions.

## Getting Started
Before making a contribution, please ensure that you have the following installed on your machine:

* Git

## Run Asteroid on your local machine

1. Clone the repository to your local machine:
```Bash
git clone https://github.com/Azure/Asteroid.git
```

2. Navigate to the react directory
```Bash
cd .\react-gh\
```

3. Run the command "npm i" or "npm install" to install dependencies.
```Bash
npm i
```
or
```Bash
npm install
```
In the event that you encounter an error during this step, please refer to the following error handling guide which may be of assistance:

| Command    | Error |
|-------------|-----------|
npm config set legacy-peer-deps true | npm ERR! code ERESOLVE npm ERR! ERESOLVE unable to resolve dependency tree
npm i react-router-dom --save | Cannot find module 'react-router-dom' or its corresponding type declarations


4. Start the development server:
```Bash
npm start
```

5. Open your web browser and navigate to http://localhost:3000.


## Contributing & Pushing new features

Contributions to the **Asteroid** tool are welcome and encouraged. To contribute, you can follow the steps below:

1.  Fork the Asteroid repository on GitHub.

2.  Clone your forked repository to your local machine:
```Bash
git clone https://github.com/your-username/Asteroid.git
```
* To run Asteroid on your local machine, please refer to the section titled "Run Asteroid on Your Local Machine" above and begin from step 2.


3.  Create a new branch for your feature:
```Bash
git checkout -b <feature-name>
```

4.  Make changes to the codebase and commit your changes:
```Bash
git add .
git commit -m "commit message"
```

5.  Push your changes to your forked repository:
```Bash
git push origin <feature-name>
```

6.  Create a pull request to merge your changes into the main Asteroid repository.


##  Guidelines
When making a contribution to Asteroid, please follow these guidelines:

* Use TypeScript for all new code.
* Follow the existing code style.
* Document new features and changes.
* Use descriptive commit messages.

## Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## License
By contributing to Asteroid, you agree that your contributions will be licensed under the MIT License.
