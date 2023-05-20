export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CheckedItemsState {
  [parent: string]: boolean;
}

export interface departmentInfoState {
  [parent: string]: {
    noOfSubdepartmentsChecked: number;
    isExpanded: boolean;
  };
}
