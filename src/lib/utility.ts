import AppConsts from './appconst';

declare var datamind: any;

export function L(key: string, sourceName?: string): string {
  let localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;
  return datamind.localization.localize(key, sourceName ? sourceName : localizationSourceName);
}

export function isGranted(permissionName: string): boolean {
  return datamind.auth.isGranted(permissionName);
}
