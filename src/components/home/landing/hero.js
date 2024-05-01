import PropTypes from 'prop-types';
import React from 'react';
import { BgImage } from 'gbimage-bridge';

const Hero = ({
  children,
  image,
  ...props
}) => {
  const backgroundFluidImageStack = [
    image,
    'linear-gradient(rgba(0,0,255,0.3), rgba(255,0,255,0.3))',
  ].reverse();

  return (
    <BgImage
      image={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BgImage>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default Hero;
