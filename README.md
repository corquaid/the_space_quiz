# The Space Quiz

A responsive website built with Next.js

[Live](https://thespacequiz.com)

<img src="https://github.com/corquaid/the_space_quiz/blob/develop/public/readme-images/Screenshot%202021-07-28%20125911.jpg" width="500px"/>

## How I worked on this project

My goal was to simulate a professional development environment and gain experience with the Next.js framework.

-   This Next.js app was built based on previous "no-code" designs made on the Wix platform in 2020 before I started my web dev journey.
-   I built the codebase in a logical manner, using reusable components where possible and locally-scoped responsive CSS Modules for greater control.
-   Once the app was deployed to production on Vercel (as an MVP), further improvements are introduced via branches and Pull Requests.

## Project Details

-   Stateful logic is handled through ContextAPI: [Example code](https://github.com/corquaid/the_space_quiz/blob/main/contexts/QuizContext.jsx).
-   Responsive CSS using CSS Modules: [Example code](https://github.com/corquaid/the_space_quiz/blob/main/styles/Layout.module.css).
-   Material-UI components (Tooltip, Menu Drawer) are also used and customised through the `makeStyles` custom hook and the `withStyles` HOC APIs: [Example code](https://github.com/corquaid/the_space_quiz/blob/main/components/navbar/CustomListItem.jsx).
-   The application uses the getServerSideProps async function from Next.js to fetch data from both a MongoDB cluster and an Airtable integration. Examples for the [request](https://github.com/corquaid/the_space_quiz/blob/main/pages/spacex/machines.jsx) and data transformation [Example code inside index.jsx](https://github.com/corquaid/the_space_quiz/blob/main/pages/index.jsx)
-   Integration tests using React Testing Library: [Link to example test on GitHub]

## Why I built the project this way

-   I wanted to use Next.js for this project as an introduction to the framework, having worked mostly with React previously.
-   I chose not to use a more complex state management library such as Redux. Context was sufficient for the initial version of the app.
-   Module-style CSS allows separation of styling for individual components and pages.
-   I chose MongoDB to host the app data, also as a proper introduction to using this technology.

## Ongoing work on this project (some new features, some housekeeping):

### Functionality Changes

-   [ ] Implement Next.js image optimisation.
-   [ ] Migrate (at least partially) to TypeScript.
-   [ ] Add dark/light mode toggle switch.
-   [ ] Add social media sharing functionality to ScoreModal component.
-   [ ] Add "Go Back" button and required logic to QuizPanel component.
-   [ ] Add fix for nodemailer/gmail Production issue.
-   [ ] Introduce additional testing with Jest / Testing Library.

### Refactoring / Housekeeping

-   [ ] Add Sitemap and robots.txt
-   [ ] Move HomePage hosted data from Airtable to MongoDB.
-   [ ] Add quiz question images to MongoDB documents where needed.
-   [x] Optimise responsive design.
-   [x] Add ScoreModal score range messages.

-   Set up continuous integration to run the tests and ESLint on every Pull Request


## Available Scripts

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
[List scripts to start or test the app here]
