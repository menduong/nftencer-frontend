import { RouteComponentProps } from '@reach/router';

/**
 * Base props for SPA pages defined in `.spa.tsx` files.
 */
export type BasePageProps = RouteComponentProps;

/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 */
export function mapModifiers(baseClassName: string, ...modifiers: (string | string[] | false | undefined)[]): string {
  return modifiers
    .reduce<string[]>((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
    .map(m => `-${m}`)
    .reduce<string>((classNames, suffix) => (classNames += ` ${baseClassName}${suffix}`), baseClassName);
}
