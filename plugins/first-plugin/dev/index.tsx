import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { firstPluginPlugin, FirstPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(firstPluginPlugin)
  .addPage({
    element: <FirstPluginPage />,
    title: 'Root Page',
    path: '/first-plugin'
  })
  .render();
