export interface BaseUserDto {

    id?: number,
    keyword?: string,
    isActive?: boolean,
    departmentId?: number,
    userUniqueNo?: string,
    parentDepartmentId?: number,
    skipCount?: number,
    maxResultCount?: number
}