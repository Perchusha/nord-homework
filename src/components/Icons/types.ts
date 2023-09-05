import React from 'react';

export interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  tooltip?: string;
}

export interface CommonAttrs {
  ref: React.RefObject<SVGSVGElement>;
  width: string;
  height: string;
  tabIndex: number;
  xmlns: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  $isHovering: boolean;
}

export interface IHOCIcon extends IIcon {
  commonAttributes: CommonAttrs;
}
