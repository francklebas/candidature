<script lang="ts" setup>
const supabase = useSupabase();

const { data: items, error } = await useAsyncData("candidates", async () => {
  const { data, error } = await supabase.from("candidatures").select("*");

  if (error) {
    throw error;
  }

  return data;
});
</script>

<template>
  <div>
    <div>Hello candidatures</div>
    <div v-for="item in items" :key="item.id">{{ item.title }}</div>
  </div>
</template>
