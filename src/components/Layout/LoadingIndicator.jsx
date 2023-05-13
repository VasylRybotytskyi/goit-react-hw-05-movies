import React from 'react';
import { LoadingDots, Dot } from './Layout.styled';

const LoadingIndicator = () => {
  return (
    <LoadingDots>
      <Dot delay="0s" />
      <Dot delay=".2s" />
      <Dot delay=".4s" />
    </LoadingDots>
  );
};

export default LoadingIndicator;
