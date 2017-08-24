# React + TypeScript Starter

A minimal yet complete application boilerplate for creating React applications with TypeScript.

**Full Application Size:** ~69.8kb (gzipped, including all dependencies)

Most of size comes from included dependencies. (React, Glamorous, Glamor, React-Router) If you do not use these, you can remove them.

Development: `yarn run watch`

Production: `yarn run build:production`

## Goal

The goal of this project is to provide a minimal boilerplate of the "lowest common denominator" of frequently used dependencies in my projects. I should be able to begin programming without having to worry about initial setup or organization.

## Features

- React Fiber (v16)
- TypeScript 2.4
  - Uses "awesome-typescript-loader" with babel caching and faster build times
- Webpack 3
  - Tree shaking, dynamic imports
  - Built in size-visualization tools
- Error Overlay during development (From CRA)
- Hot Reloading
- Glamorous CSS-in-JS
  - Automatic pre-fixing, optimization
  - Automatic displayname addition via a babel plugin
- React Router v4
- Decorators
  - Included: `@bind`, `@memoize`, `@debounce`
- TSLint 

## Lighthouse Score

![Imgur](http://i.imgur.com/7T9d5qt.png?1)

I'll be working on the PWA score soon.

## Upcoming Features

- Babel polyfills and cross-browser compatibility
- Testing with Jest and Enzyme
- PWA features, SW precache, etc.
- Code splitting + guide with react loadable
- Image optimization/loading via webpack loader

## Application Size

Bundle Visualized:

![Imgur](http://i.imgur.com/A1VU8XD.png)

Webpack Build Output:

![Imgur](http://i.imgur.com/KitU9q4.png)