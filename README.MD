# pankod-fe-challenge

This project was generated with [superplate](https://github.com/pankod/superplate).

## Tech Stack

- React with TypeScript
- [Jest](https://github.com/facebook/jest) & [enzyme](https://github.com/enzymejs/enzyme) for unit testing
- [zustand](https://github.com/pmndrs/zustand) for state management

## Details

- Used a zustand persistent store as mock-db. Pagination and searching is done by using that store. Any result of pagination or searching is saved in another zustand store.

## TODO

- Responsive ui
- Fixing style values by following the design measurements in sketch file
- Using styling technique different from React's inline-styling
- More unit tests
