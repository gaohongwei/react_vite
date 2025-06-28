- Loadable Components
  npm install @loadable/component
  https://loadable-components.com/docs/getting-started/
- Lazy load
  https://github.com/facebook/react/issues/16132
```
const ABC = lazy(() => import("components/ABC"));

export const LINKS = [
  {
    component: './tabs/someNameComponent',
    name: 'someName',
    icon: 'mdi mdi-truck',
  },
  {
    component: './tabs/anotherNameComponent',
    name: 'anotherName',
    icon: 'mdi mdi-card',
  },
];

export const SUB_PAGES = LINKS.map(({ name, component }) => {
  return {
    path: name,
    component: lazy(() => import(`${component}`)), // THIS IS THE TRICK
  };
});
```
