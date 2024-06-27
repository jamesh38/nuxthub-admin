<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <div
      class="surface-card p-4 shadow-2 border-round w-full sm:w-8 md:w-6 lg:w-4"
    >
      <h2 class="text-center">Hello World Login</h2>
      <div class="p-fluid">
        <Button label="Login" class="p-mt-2 w-full" @click="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();

definePageMeta({
  layout: false,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

async function handleLogin() {
  await signIn("auth0");
}
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
