import { action, makeObservable, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';
import { GetAllPermissionsOutput } from '../services/role/dto/getAllPermissionsOutput';
import { GetAllRoleOutput } from '../services/role/dto/getAllRoleOutput';
import { GetRoleAsyncInput } from '../services/role/dto/getRolesAsyncInput';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedRoleResultRequestDto } from '../services/role/dto/PagedRoleResultRequestDto';
import RoleEditModel from '../models/Roles/roleEditModel';
import { UpdateRoleInput } from '../services/role/dto/updateRoleInput';
import roleService from '../services/role/roleService';

class RoleStore {
  constructor() {
      makeObservable(this);
  }
  
  @observable roles!: PagedResultDto<GetAllRoleOutput>;
  @observable roleEdit: RoleEditModel = new RoleEditModel();
  @observable allPermissions: GetAllPermissionsOutput[] = [];
  @observable role!: GetAllRoleOutput;

  @action.bound
  async create() {
    let result = await roleService.create(this.role);
    this.roles.items.push(result);
  }

  @action.bound
  async createRole() {
    this.roleEdit = {
      grantedPermissionNames: [],
      role: {
        name: '',
        displayName: '',
        description: '',
        id: 0,
      },
      permissions: [{ name: '', displayName: '', description: '' }],
    };
  }

  @action.bound
  async getRolesAsync(getRoleAsyncInput: GetRoleAsyncInput) {
    await roleService.getRolesAsync(getRoleAsyncInput);
  }

  @action.bound
  async update(updateRoleInput: UpdateRoleInput) {
    await roleService.update(updateRoleInput);
    this.roles.items
      .filter((x: GetAllRoleOutput) => x.id === updateRoleInput.id)
      .map((x: GetAllRoleOutput) => {
        return (x = updateRoleInput);
      });
  }

  @action.bound
  async delete(entityDto: EntityDto) {
    await roleService.delete(entityDto);
    this.roles.items = this.roles.items.filter((x: GetAllRoleOutput) => x.id !== entityDto.id);
  }

  @action.bound
  async getAllPermissions() {
    var result = await roleService.getAllPermissions();
    this.allPermissions = result;
  }

  @action.bound
  async getRoleForEdit(entityDto: EntityDto) {
    let result = await roleService.getRoleForEdit(entityDto);
    this.roleEdit.grantedPermissionNames = result.grantedPermissionNames;
    this.roleEdit.permissions = result.permissions;
    this.roleEdit.role = result.role;
  }

  @action.bound
  async get(entityDto: EntityDto) {
    var result = await roleService.get(entityDto);
    this.role = result;
  }

  @action.bound
  async getAll(pagedFilterAndSortedRequest: PagedRoleResultRequestDto) {
    let result = await roleService.getAll(pagedFilterAndSortedRequest);
    this.roles = result;
  }
}

export default RoleStore;
