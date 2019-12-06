interface GeneratedOption {
  nullable?: boolean;
}
export const Generated: Function = function(options?: GeneratedOption) {
  return function(target: any, propertyName: any) {
    const reflectMetadataType =
      Reflect && (Reflect as any).getMetadata
        ? (Reflect as any).getMetadata("design:type", target, propertyName)
        : {};
    console.info(
      "[Column Generate]:",
      propertyName,
      reflectMetadataType.name,
      options,
      target.constructor.name
    );
    return target;
  };
};
