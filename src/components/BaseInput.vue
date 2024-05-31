<template>
  <div class="relative w-full">
    <div class="absolute top-[15px] left-[10px] z-[100]">
      <svg class="fill-[#2D31A633] w-[30px] h-[30px]">
        <use :xlink:href="props.svg"></use>
      </svg>
    </div>
    <input
      class="px-[10px] py-[20px] pl-[50px] rounded-[15px] w-full bg-[#8098F980] backdrop-opacity-50"
      :type="type"
    />
    <div
      v-if="props.password"
      class="absolute right-[20px] top-[15px] w-[30px] h-[30px]"
      @click="handleClick"
    >
      <svg class="fill-[#2D31A633]">
        <use xlink:href="/sprite.svg#eye"></use>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  svg: string;
  password?: boolean;
}>();
const type = ref(props.password ? "password" : "text");

function handleClick() {
  type.value = type.value === "password" ? "text" : "password";
}
</script>
