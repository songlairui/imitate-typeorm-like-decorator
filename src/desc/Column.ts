interface ColumnOption {
  nullable?: boolean;
}
export const Column: Function = function(options?: ColumnOption) {
  return function(target: any, propertyName: any) {
    const reflectMetadataType =
      Reflect && (Reflect as any).getMetadata
        ? (Reflect as any).getMetadata("design:type", target, propertyName)
        : {};
    console.info(
      "[Column]:",
      propertyName,
      reflectMetadataType.name,
      options,
      target.constructor.name
    );
    return target;
  };
};
