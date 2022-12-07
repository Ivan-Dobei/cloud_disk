export type Mods = Record<string, boolean | string>
export type Additional = Array<string>;

export const classNames = (className: string, mods: Mods = {}, additional: Additional = []): string => {
   return [
      className,
      ...additional,
      ...Object.entries(mods)
         .filter(([className, value]) => Boolean(value))
         .map(([className, value]) => className),
   ].join(' ');
};
