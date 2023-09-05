import React, { useRef } from 'react';
import { useKeyboardListener } from '../../utils';
import { IIcon, IHOCIcon, CommonAttrs } from './types';

const IconHOC = (IconComponent: React.ComponentType<IHOCIcon>) => (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  const commonAttributes: CommonAttrs = {
    ref: svgRef,
    width: props.width || '2.5vmin',
    height: props.height || '2.5vmin',
    tabIndex: 0,
    xmlns: 'http://www.w3.org/2000/svg',
    style: { ...props.style },
    onClick: props.onClick,
    $isHovering: !!props.onClick,
  };

  return <IconComponent {...props} commonAttributes={{ ...commonAttributes }} />;
};

export default IconHOC;
