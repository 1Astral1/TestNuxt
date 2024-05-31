<template>
  <div class="container">
    <div class="flex rounded-[50px]">
      <div
        class="px-[122px] py-[320px] h-[100vh] bg-white rounded-l-[40px] w-[720px]"
      >
        <div class="w-[477px]">
          <div
            class="font-Montserrat text-[40px] font-bold text-center leading-[20px]"
          >
            Login to your Account
          </div>
          <div
            class="font-semibold font-Montserrat text-[15px] text-[#71717A] flex items-center mt-[25px] mb-[25px]"
          >
            <hr class="flex-1" />
            <div class="w-[213px] text-center">with email</div>
            <hr class="flex-1" />
          </div>

          <div class="space-y-[10px]">
            <BaseInput :svg="`/sprite.svg#email`" />
            <BaseInput :password="true" :svg="`/sprite.svg#shield`" />
          </div>
          <div class="mt-[25px] mb-[20px]">
            <BaseButton>LOG IN</BaseButton>
          </div>
          <div class="flex gap-1 justify-center">
            <div class="font-Montserrat font-normal text-base text-[#161616]">
              Don’t have account?
            </div>
            <NuxtLink
              class="font-Montserrat font-medium text-base text-[#8098F9]"
            >
              Create an account
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-[720px] h-[100vh] flex-[1 0 auto]">
        <Right :img="'/images/img1.jpg'" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
