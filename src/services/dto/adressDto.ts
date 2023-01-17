import { GetCityDto } from "../city/dto/getCityDto";
import { GetCountryDto } from "../country/dto/getCountryDto";
import { GetDistrictDto } from "../district/dto/getDistrictDto";

export interface AdressDto {
    city:GetCityDto;
    country:GetCountryDto;
    district:GetDistrictDto
}