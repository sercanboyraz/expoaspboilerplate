export interface PagedFilterAndSortedRequest {
  id?: number;
  maxResultCount?: number;
  skipCount?: number;
  isApproved?: boolean;
  contactInformationId?: number;
  contactInformation?: ContactInformationDto;
  phoneNumber?:string;
  email?:string;
  currencyId?: number;
  currencyName?: string;
  sectorId?: any;
}
export interface ContactInformationDto {
    id?: 0;
    countryId?: number;
    countryName?: string;
    countryCode?: string;
    zoneId?: number;
    zoneName?: string;
    cityId?: number;
    cityName?: string;
    districtId?: number;
    districtName?: string;
    languageId?: number;
    languageName?: string;
    languageCode?: string;
    address?: string;
    addressHandingOver?: string;
    postalCode?: string;
    phoneNumber?: string;
    mobileNumber?: string;
    faxNumber?: string;
    corporateMail?: string;
    email?: string;
    webAddress?: string;
    gender?: boolean;
    jobName?: string;
    foundationYear?: number;
    employeesCount?: number;
    otherIdNo?: string;
}