<template>
  <Menubar :model="items">
    <template #start>
      <span class="mr-5 font-bold">Hello World</span>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down',
            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
          ]"
        />
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <IconField icon-position="left">
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
        <Avatar :image="auth0?.user?.image || undefined" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const { data: auth0, signOut } = useAuth();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
        shortcut: "⌘+S",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
        shortcut: "⌘+B",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
        shortcut: "⌘+U",
      },
      {
        separator: true,
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
            badge: 2,
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
            badge: 3,
          },
        ],
      },
    ],
  },
  {
    label: "Logout",
    icon: "pi pi-door",
    command: () => {
      signOut({ callbackUrl: "/login" });
    },
  },
]);
</script>
