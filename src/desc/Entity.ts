interface OrderByCondition {
  [columnName: string]:
    | ("ASC" | "DESC")
    | {
        order: "ASC" | "DESC";
        nulls?: "NULLS FIRST" | "NULLS LAST";
      };
}

interface EntityOptions {
  name?: string;
  orderBy?: OrderByCondition | ((object: any) => OrderByCondition | any);

  engine?: string;
  database?: string;
  schema?: string;
  synchronize?: boolean;
  withoutRowid?: boolean;
}
type EntityT = (options?: EntityOptions) => Function;
type EntityTOr = (name?: string, options?: EntityOptions) => Function;

export const Entity: EntityT | EntityTOr = function(name, options) {
  console.group("Table", name);
  return function(target: Function) {
    console.info("[Entity]:", target.name, options);
    console.groupEnd();
  };
};
