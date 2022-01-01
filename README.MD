# pankod-fe-challenge

This project was generated with [superplate](https://github.com/pankod/superplate).

## Deployment

[See app deployed on Heroku](https://pankod-fe-osmannkartall.herokuapp.com/) (It may take time to load).

## Tech Stack

- React with TypeScript
- [Jest](https://github.com/facebook/jest) & [enzyme](https://github.com/enzymejs/enzyme) for unit testing
- [zustand](https://github.com/pmndrs/zustand) for state management
- [styled-components](https://github.com/styled-components/styled-components)

## Details

- Used a zustand persistent store as mock-db. It is populated after the first navigation on the home page: `https://pankod-fe-osmannkartall.herokuapp.com/` or `http://localhost:3000/`. Pagination and searching is done by using that store. Any result of pagination or searching is saved in another zustand store.

## TODO

- Fixing style values by following the design measurements in sketch file
- More unit tests
