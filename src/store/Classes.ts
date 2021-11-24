import { makeAutoObservable } from "mobx";

type ClassItem = {
  id: number;
  title: string;
}

export class ClassesStore {
  items: ClassItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addClassItem(classItem: ClassItem) {
    this.items = [...this.items, classItem];
  }

  deleteClassItem(classItem: ClassItem) {
    this.items = this.items.filter(item => item.id !== classItem.id);
  }
}

