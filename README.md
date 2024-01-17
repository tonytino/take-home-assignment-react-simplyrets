# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

I've compiled my thoughts under the sections below. Please let me know if you have any questions.

## Design (Figma)

When trying to leverage the [figma design](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project---Engineering?type=design&node-id=0-1&mode=design) provided, I found I was unable to inspect aspects of the design (e.g. what font size is used for X), perhaps due to ownership of the design (and that I'm viewing it as a guest). As a result, I did my best to match the appearance of the design. I did slightly darken the listing date in the design to achieve a11y constast compliance.

## Fetch Caching

As requested, fetches are cached in local storage. I would probably do this differently though if using local storage wasn't explicitly requested, e.g. by using a well-vetted tool (e.g. [`react-query`](https://tanstack.com/query/latest/)) to manage this for us or, if we really wanted to roll our own implementation, by leveraging the [`caches API`](https://web.dev/articles/cache-api-quick-guide).

## Routing

The routing is configured in [router](./src/pages/router.js), where you'll find I've created a structure that lends itself to building out the property listing page (`/property-listings/:listingId`). Furthermore, the [`<Layout />`](./src/components/Layout/Layout.jsx) is rendered at the top-level, along with an error boundary in the form of [`<ErrorPage />`](./src/pages/error/ErrorPage.jsx). The [`<HomePage />`](./src/pages/home/HomePage.jsx) shell exists, but it is configured to redirect to `/property-listings` given the context here.

I believe the structure laid out between the router implementation and the [`/pages`](./src/pages) directory makes it easy to grok how the addition of pages should be handled.

## Styling

I kept it simple for the styling and just leveraged the built-in css modules support. I'm not too particular about styling tools (though I'm wary of css-in-js performance issues), but I have been pleasantly suprised by [Tailwind](https://tailwindcss.com/) lately and would probably reach for that long-term.

## Testing

Testing largely only exists for [`<PropertyListing />`](./src/components/PropertyListing/PropertyListing.jsx) (plus [`<Layout />`](./src/components/Layout/Layout.jsx)), including its various view [helpers](./src/components/PropertyListing/helpers/index.js). I believe this provides the most value across all the opportunities available to test here when considering time constraints.

### E2E Testing

I believe the best means to test the [pages](./src/pages) would be via an E2E testing framework, like [Cypress](https://www.cypress.io/). This would be something I'd like to get set up with more time available.

### Utils Testing

Looking at the current utils present in [utils](./src/utils/), they're mostly just abstractions around `fetch` and `localStorage`, so I decided they would have to be skipped due to time constraints. I would like to test `fetchWithCache` first and foremost as it has the most unique logic.

## Closing

Thanks for reading, hope you enjoy(ed) reading through my solution!
