import React from 'react';

import NormalButton, { ToogleButton } from './Task';

export default {
  component: NormalButton,
  title: 'TwoTypesButton',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const Button = () => <NormalButton />;

export const ButtonWithImage = () => <ToogleButton />;
