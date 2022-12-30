import { action, computed, observable } from "mobx";
import React from "react";

class UserStore {
    @observable todos = [];
    @observable count = 0;
    @observable selectedStatus = "all";

    @computed
    get delayMessage() {
        return 'The train is delayed by' + this.selectedStatus;
    };

    @action.bound
    increment() {
      this.count += 1;
    }
  
    @action.bound
    decrement() {
      this.count -= 1;
    }

    @action('adding todo item')
    addTodo(todo){
        this.todos.push({
            id: this.todos[this.todos.length - 1].id +1,
            status: false,
            text: todo
        })
    }

    @action('Selected status changed')
    updateDelay = delay => {
        this.count = delay;
    };
}

export const userStore = new UserStore();
export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext)
