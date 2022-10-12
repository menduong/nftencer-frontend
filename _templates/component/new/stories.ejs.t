---
to: src/components/<%= level %>/<%= name %>/index.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.toPascalCase(name) %> } from './index';

storiesOf('Components|<%= level %>/<%= h.toPascalCase(name) %>', module).add('normal', () => <<%= h.toPascalCase(name) %>>Sample test</<%= h.toPascalCase(name) %>>);
