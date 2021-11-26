import { makeAutoObservable } from "mobx";

export type ClassItem = {
  id: number;
  title: string;
}

export class ClassesStore {
  items: ClassItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  updateClassItem(classItem: ClassItem) {
    let found = this.items.find(item => item.id === classItem.id);
    if (found) {
      this.items = this.items.map(item => {
        if (item.id === classItem.id) {
          return classItem;
        }
        return item;
      });
    } else {
      this.items = [...this.items, classItem];
    }
  }

  deleteClassItem(classItem: ClassItem) {
    this.items = this.items.filter(item => item.id !== classItem.id);
  }
}

