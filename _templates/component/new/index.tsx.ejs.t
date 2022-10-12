---
to: src/components/<%= level %>/<%= name %>/index.tsx
---
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const <%= h.toPascalCase(name) %>: React.FC<Props> = (props) => {
  return (
    <div className={mapModifiers('<%= h.createBaseClassName(level, name) %>', props.modifiers)}>
      {props.children}
    </div>
  );
};

export default hot( <%= h.toPascalCase(name) %>);
