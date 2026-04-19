declare module "react-simple-maps" {
  import { ReactNode, MouseEvent, CSSProperties } from "react";

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
    parallels?: [number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Geography[] }) => ReactNode;
  }

  interface Geography {
    rsmKey: string;
    properties: Record<string, unknown>;
    [key: string]: unknown;
  }

  interface GeographyStyleObject {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    cursor?: string;
  }

  interface GeographyStyle {
    default?: GeographyStyleObject;
    hover?: GeographyStyleObject;
    pressed?: GeographyStyleObject;
  }

  interface GeographyProps {
    geography: Geography;
    style?: GeographyStyle;
    className?: string;
    onClick?: (event: MouseEvent<SVGPathElement>) => void;
    onMouseEnter?: (event: MouseEvent<SVGPathElement>) => void;
    onMouseMove?: (event: MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: MouseEvent<SVGPathElement>) => void;
    [key: string]: unknown;
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element;
  export function Geographies(props: GeographiesProps): JSX.Element;
  export function Geography(props: GeographyProps): JSX.Element;
  export function ZoomableGroup(props: { children?: ReactNode; [key: string]: unknown }): JSX.Element;
  export function Marker(props: { coordinates: [number, number]; children?: ReactNode; [key: string]: unknown }): JSX.Element;
  export function Annotation(props: Record<string, unknown>): JSX.Element;
  export function Line(props: Record<string, unknown>): JSX.Element;
  export function Sphere(props: Record<string, unknown>): JSX.Element;
  export function Graticule(props: Record<string, unknown>): JSX.Element;
}
