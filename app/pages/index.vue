<template>
  <main>
    <div class="card">
      <Panel toggleable>
        <template #header>
          <div class="flex align-items-center gap-2">
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              size="large"
              shape="circle"
            />
            <span class="font-bold">Amy Elsner</span>
          </div>
        </template>
        <template #footer>
          <div
            class="flex flex-wrap align-items-center justify-content-between gap-3"
          >
            <div class="flex align-items-center gap-2">
              <Button icon="pi pi-user" rounded text />
              <Button icon="pi pi-bookmark" severity="secondary" rounded text />
            </div>
            <span class="p-text-secondary">Updated 2 hours ago</span>
          </div>
        </template>
        <template #icons>
          <button class="p-panel-header-icon p-link mr-2">
            <span class="pi pi-cog" />
          </button>
          <Menu ref="menu" id="config_menu" :model="items" popup />
        </template>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Panel>
    </div>
  </main>
</template>

<script setup>
const menu = ref(null);

const items = ref([
  {
    label: "Refresh",
    icon: "pi pi-refresh",
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Delete",
    icon: "pi pi-times",
  },
]);
</script>
