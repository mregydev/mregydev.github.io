const myData = {
  skills: [
    {
      name: 'Typescript',
      percentage: '100',
    },
    {
      name: 'React',
      percentage: '100',
    },
    {
      name: 'Redux',
      percentage: '100',
    },
    {
      name: 'Vue',
      percentage: '90',
    },
    {
      name: 'Pinia',
      percentage: '90',
    },
    {
      name: 'NextJs',
      percentage: '90',
    },
    {
      name: 'Jest',
      percentage: '90',
    },
    {
      name: 'Cypress',
      percentage: '80',
    },
  ],
  experience: [
    {
      position: 'Senior Front End Engineer (Vue, Nuxt)',
      company: 'Kaufland e-commerce',
      from: '05/2024',
      to: '11/2024',
      city: 'Berlin , Germany',
      responsiblities: [
        `Led the iterative migration of the product details page from Vue 2 to
        Vue 3 with TypeScript, enabling seamless communication between
the old and new applications through the DispatchEvent API while
transitioning from Vuex to pinia composables.`,
        `Fostered a solution using Module Federation to enable a single
running instance of the UI library across all micro-frontend
applications, ensuring consistency.`,
        `Innovated solutions to optimize SSR performance by reducing the
critical rendering path, rendering SEO components on the server and
user-interactive components on the client.`,
        `Implemented GA4 transformation, A/B tests with Optimizely, and
monitored application performance with Datadog RUM based on
defined SLOs to ensure reliability and advanced analytics.`,
        `Authored technical documentation on performance measurement
and debugging using Chrome dev tools like layout shifts.`,
        `Conduced code reviews for juniors and foster collaboration through
pair programming.`,
      ],
    },
    {
      position: 'Senior Front End Engineer (React,NextJs)',
      company: 'Instafreight',
      from: '04/2023',
      to: '05/2024',
      city: 'Berlin, Germany',
      responsiblities: [
        `Led the transformation of a legacy PHP application into React
TypeScript) by applying an in-place migration approach, which
resulted in iterative development and enabled PHP and React to
coexist seamlessly within the same app during the transition.`,
        `Applied Domain-Driven Design DDD principles by engaging with
stakeholders to identify bounded contexts and extract domain
models, ensuring the architecture aligned with business needs and
fostered maintainability.`,
        `Designed and implemented component testing using testing library
and end-to-end testing with Cypress for each iteration of the
converted modules, achieving nearly 80% test coverage to ensure
stability, reliability, and confidence in the migration process.`,
        `Optimized rendering performance by addressing Core Web Vitals,
including First Contentful Paint FCP, Interaction to Next Paint INP,
and layout shift, through strategies such as lazy loading, preloading
large assets (e.g., fonts and images), and refining rendering
workflows to improve responsiveness and visual stability.`,
        `Enhanced CI/CD pipelines by integrating Bun.js, reducing build times
and enabling faster iteration cycles for development and production
releases.`,
        `Conducted comprehensive code reviews for junior developers and
fostered team collaboration through pair programming, promoting
knowledge-sharing, skill development, and code quality.`,
        `Built and maintained a Rollup-based UI library documented with
storybook, and used the Adapter Pattern to decouple it from third
party UI libraries like material UI.`,
        `Utilized Next.js static site generation to create SEO-optimized Help
and About Us pages.`,
      ],
    },
    {
      position: 'Senior Front End Engineer (React)',
      company: 'Epam',
      from: '03/2022',
      to: '04/2023',
      city: 'Malaga, Spain',
      responsiblities: [
        `Led the migration of the codebase from JavaScript to TypeScript,
setting standards, providing guidance, and ensuring high-quality,
type-safe code`,
        `Built and maintained required atomic React components with
Storybook for visual validation, and wrote E2E tests using Cypress to
ensure workflow reliability.`,
        `Led the frontend team by providing technical direction, mentoring,
conducting code reviews, and fostering collaboration through pair
programming sessions.`,
      ],
    },
    {
      position: 'Front End Engineer (React)',
      company: 'Cegedim',
      from: '08/2020',
      to: '02/2022',
      city: 'Cairo, Egypt',
      responsiblities: [
        `Enhanced application load speed through memoization, lazy loading,
and code splitting with Webpack.`,
        `Added required e2e tests using cypress to ensure reliability.`,
        `Enhanced team expertise by recruiting skilled professionals through
comprehensive resume assessments and interviews.`,
        `Worked in an Agile Scrum environment, managing tasks with Jira and
ensuring effective team collaboration.`,
      ],
    },
    {
      position: 'Frontend Engineer (React)',
      company: 'Buseet',
      from: '06/2020',
      to: '08/2020',
      city: 'Cairo, Egypt',
      responsiblities: [
        `Build Components using react classes and hooks and use Redux for
state management.`,
        `Writing unit test with Jest and e2e test with test café.`,
        `Deploy react application with docker to azure cloud through pipeline
process that is managed with Jenkins.`,
      ],
    },
    {
      position: 'GIS Frontend Engineer',
      company: 'Dar Al Riyadh Group',
      from: '11/2014',
      to: '03/2020',
      city: 'Riyadh , Saudi Arabia',
      responsiblities: [
        `Responsible for GIS projects in different governmental sectors,
including MOMRA, Mecca municipality, and Medina municipality`,
        `Writing frontend part using Arcgis JS and Angular JS`,
        `Writing cross-platform mobile application using phonegap`,
        `Writing responsive components using google materials and
bootstrap`,
        `Created SPA web apps that applies different geospatial operations
including rendering, editing, identification and classification`,
        `Responsible for editing maps through arcmap and publishing them
through arc server`,
        `Did some work in Back-end services using restful architecture with
MVC and expressjs`,
      ],
    },
    {
      position: 'GIS Frontend Engineer',
      company: 'Esri North-East Africa',
      from: '01/2013',
      to: '07/2014',
      city: 'Cairo , Egypt',
      responsiblities: [
        `Responsible for development of Dot-Geo which is GIS based product
offering different geospatial operations and used in Egypt and KSA`,
        `Developed Back-end services using restful architecture with WCF
and RIA services`,
        `Writing unit test and integration test using Microsoft test framework
and rhino mocks`,
        `Writing client side applications using silverlight`,
        `Using TFS as the main source control`,
      ],
    },
  ],
  courses: [
    {
      name: 'Microfrontend with React',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-f39bc2ff-e22c-4450-acbf-b1d58c3feb29/',
      icon: 'fa-solid fa-chalkboard',
    },
    {
      name: 'Motivating and engaging employees',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/5297a51da43cd3e2eabb7511a66a9cd8569681c4218c284e7e66a57497581b83?u=106534538',
      icon: 'fa-brands fa-linkedin',
    },
  ],
  certifications: [
    {
      name: 'Certified React Frontend developer',
      issuer: 'Hacker rank',
      link: 'https://www.hackerrank.com/certificates/2c4655bb24c8?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate',
      icon: 'fa-brands fa-hackerrank',
    },
    {
      name: 'edX Verified Certificate for Introduction to MongoDB using the MEAN Stack',
      issuer: 'edx',
      link: 'https://courses.edx.org/certificates/83e8e93a177f4bb0a57c74cf4116ffa3',
      icon: 'fa-solid fa-certificate',
    },
  ],
  codeSamples: [
    {
      name: 'Redux Json Middleware which is a middle ware for processing json objects that can be used to process a json object before being passed to the reducer as you can access proccessed json object inside the reducer through the action data property .',
      issuer: 'Redux Json Middleware',
      link: 'https://github.com/mregydev/redux-json-middleware',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'Simple ecommerce website developed with NextJs that demonstrate mixed use of server and client components',
      issuer: 'NextJs Ecommerce website',
      link: 'https://github.com/mregydev/nextjs-website',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'Simple ecommerce website developed with NuxtJs that demonstrate mixed use of server and client components',
      issuer: 'NuxtJs Ecommerce website',
      link: 'https://github.com/mregydev/my-eCommerce',
      icon: 'fa-brands fa-github',
    },
  ],
}
