SoundScout is an application that functions as a Music Event Finder platform designed to streamline the process of discovering and promoting music events. Its homepage serves as a central hub, offering quick access to various subpages. Key features include the Request Promotion Form, Events browsing section, and a search function. Notably, users can easily navigate back to the homepage by clicking the logo, ensuring seamless exploration.

The Request Promotion Form facilitates event promotion requests, allowing users to submit necessary details. If required fields are left incomplete, an error message prompts users to rectify the issue. Conversely, upon successful submission, a pop-out displays the user's input, with potential for future development to include a confirmation message.

The Event Search page enhances event discovery, presenting a list of events categorized by keywords. For instance, searching 'Shania' filters the list to events involving her. Future enhancements could include presenting search results in a card format akin to the homepage, and optimizing API connectivity to efficiently search through the Discovery API library.

Upon selecting an event from the homepage, users are directed to the Event Details page, where pertinent event information is provided. Additionally, a button redirects users to the Ticketmaster homepage for ticket purchases. Future improvements may involve expanding event details and integrating another API for broader access to ticketing information across various platforms.

The code incorporates references from various sources. Material UI was employed to design the card components, ensuring a neat layout. Formik facilitated the creation of a responsive form with validation features. TailwindCSS assisted with a custom yet fully responsive design. Redux managed the global shared state for seamless data handling. All event data was sourced from the Ticketmaster API. Below is a list of the documentation utilized for this project:
- MUI: 'https://mui.com/material-ui/react-card/'
- Formik: 'https://formik.org/docs/examples/basic'
- TailwindCSS: 'https://tailwindcss.com/docs/installation'
- Redux: 'https://redux.js.org/introduction/getting-started'
- Ticketmaster Discovery API: 'https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/'

Deployment Link: ''

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

