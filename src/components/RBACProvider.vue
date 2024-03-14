<template>
  <slot></slot>
</template>

<script lang="ts">
import { UserPermission, Role, Rules } from "../interfaces/";

interface IRBACProviderProps {
  user: UserPermission;
  roles: Role[];
  rules: Rules;
}
</script>

<script setup lang="ts">
import { provide } from "vue";

// *INFO: internal modules
import {
  RULES_PROVIDE_KEY,
  ROLES_PROVIDE_KEY,
  USER_PERMISSION_PROVIDE_KEY,
} from "../constants";

const props = defineProps<IRBACProviderProps>();

provide(RULES_PROVIDE_KEY, props.rules);
provide(ROLES_PROVIDE_KEY, props.roles);
provide(USER_PERMISSION_PROVIDE_KEY, props.user);
</script>

<style scoped></style>
