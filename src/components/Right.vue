<template>
  <div class="bg-[#6172F3] h-full relative rounded-r-[40px] w-[720px]">
    <img
      class="absolute top-[200px] right-[57px]"
      src="/images/Frame1.svg"
      alt=""
    />
    <img class="absolute top-[327px] right-[73px]" :src="img" />
    <div class="absolute text-center bottom-[90px] right-[180px]">
      <div class="font-Montserrat font-bold text-[20px] text-white">
        Connect with any device.
      </div>
      <div class="font-Montserrat font-medium text-[16px] text-white">
        Everything you need is an internet connection.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  img: string;
}>();
</script>
