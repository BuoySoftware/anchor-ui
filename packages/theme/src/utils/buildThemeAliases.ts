type AliasDictionary<T> = Record<string, T>;
type ValueOf<T> = T[keyof T];

export function buildThemeAliases<
  Theme extends Record<string, string | number>,
  Aliases extends AliasDictionary<keyof Theme>,
  MappedAliases extends Record<keyof Aliases, ValueOf<Theme>>
>(theme: Theme, aliases: Aliases): MappedAliases {
  const mappedAliases = Object.entries(aliases).reduce((obj, [name, value]) => {
    return {
      ...obj,
      [name]: theme[value],
    };
  }, {});

  return {
    ...(mappedAliases as MappedAliases),
  };
}
