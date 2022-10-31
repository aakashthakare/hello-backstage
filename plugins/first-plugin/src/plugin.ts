import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const firstPluginPlugin = createPlugin({
  id: 'first-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const FirstPluginPage = firstPluginPlugin.provide(
  createRoutableExtension({
    name: 'FirstPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
