import { action, makeObservable, observable } from 'mobx';
import { CreateOrUpdateUserInput } from '../services/user/dto/createOrUpdateUserInput';
import { EntityDto } from '../services/dto/entityDto';
import { GetRoles } from '../services/user/dto/getRolesOuput';
import { GetUserOutput } from '../services/user/dto/getUserOutput';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedUserResultRequestDto } from '../services/user/dto/PagedUserResultRequestDto';
import userService from '../services/user/userService';

class UserStore {

    constructor() {
        makeObservable(this);
    }

    @observable users!: PagedResultDto<GetUserOutput>;
    @observable editUser!: CreateOrUpdateUserInput;
    @observable roles: GetRoles[] = [];
    @observable user!: GetUserOutput;

    @action.bound
    async create(createUserInput: GetUserOutput) {
        let result = await userService.create(createUserInput);
        this.users.items.push(result);
    }

    @action.bound
    async update(updateUserInput: GetUserOutput) {
        let result = await userService.update(updateUserInput);
        this.users.items = this.users.items.map((x: GetUserOutput) => {
            if (x.id === updateUserInput.id) x = result;
            return x;
        });
    }

    @action.bound
    async delete(entityDto: EntityDto) {
        await userService.delete(entityDto);
        this.users.items = this.users.items.filter((x: GetUserOutput) => x.id !== entityDto.id);
    }

    @action.bound
    async getRoles() {
        let result = await userService.getRoles();
        this.roles = result;
    }

    @action.bound
    async get(entityDto: EntityDto) {
        let result = await userService.get(entityDto);
        // var contactId = result.contactInformationId;
        // var result1 = await contactInformationService.get({ id: contactId });
        // result.contactInformation = result1;
        this.user = result;
    }

    @action.bound
    async createUser() {
        this.editUser = {
            userName: '',
            name: '',
            surname: '',
            emailAddress: '',
            isActive: false,
            roleNames: [],
            password: '',
            id: 0,
        };
        this.roles = [];
    }

    @action.bound
    async clearUser() {
        this.user = {} as GetUserOutput;
    }

    @action.bound
    async getAllClear() {
        if (this.users)
            this.users.items = [];
    }

    @action.bound
    async getAll(pagedFilterAndSortedRequest: PagedUserResultRequestDto) {
        let result = await userService.getAll(pagedFilterAndSortedRequest);
        this.users = result;
    }

    async changeLanguage(languageName: string) {
        await userService.changeLanguage({ languageName: languageName });
    }
}

export default UserStore;
