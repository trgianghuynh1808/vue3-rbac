// *INFO: role of system
export type Role = string | number;

// *INFO: permission (feature) of system
export type Permission = string;

// *INFO: permission callback
// @data: args to handle permission with condition
export type PermissionCallback = (data?: any) => boolean | boolean;

// *INFO: rules of system. Define permission available for per role
export type Rules = {
  [key: Role]: {
    [key: Permission]: PermissionCallback;
  };
};

// *INFO: permission info of user
export type UserPermission = {
  uid: string;
  roles: Role[];
  permissions: Permission[];
};

export type RBACConfig = {
  user: UserPermission;
  roles: Role[];
  rules: Rules;
};
