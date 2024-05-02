<template>
  <main class="flex flex-col justify-center">
    <section class="logo w-full flex justify-center">
      <Logo />
    </section>

    <section class="input-box flex flex-col gap-y-4 mt-8 px-6">
      <InputLabel
        v-model:value="id"
        id="id"
        label="아이디"
        placeholder="아이디 입력 (테스트용: test)"
        type="text"
        :errorLabel="idErrorLabel"
      />
      <InputLabel
        v-model:value="password"
        id="password"
        label="비밀번호"
        placeholder="비밀번호 입력 (테스트용: 1234)"
        type="password"
        @event="signin"
        :errorLabel="passwordErrorLabel"
      />
      <button
        class="bg-primary font-semibold text-font-black border-none hover:border-none h-12 focus:outline-none"
        @click="signin"
      >
        로그인
      </button>
    </section>

    <section class="social flex flex-col gap-y-3 mt-4 px-6">
      <h2 class="block text-start font-bold text-sm">회원 가입</h2>
      <div
        class="flex justify-center items-center gap-x-3 rounded-xl bg-blue-600 h-12 cursor-pointer"
        @click="$router.push('/signup')"
      >
        <!-- <span class="text-base font-semibold">핸드폰 본인인증</span> -->
        <span class="text-base font-semibold">회원가입</span>
      </div>
    </section>

    <section class="social flex flex-col gap-y-3 mt-4 px-6">
      <h2 class="block text-start font-bold text-sm">간편 가입</h2>
      <div class="flex justify-center items-center gap-x-3 rounded-xl bg-[#03C75A] h-12 cursor-pointer">
        <img class="block w-5" src="@/assets/images/auth/naver_login_icon.png" alt="naver" />
        <span class="text-base font-semibold">네이버 로그인</span>
      </div>
      <div class="flex justify-center items-center gap-x-3 rounded-xl bg-[#FEE500] h-12 cursor-pointer">
        <img class="block w-6" src="@/assets/images/auth/kakao_login_icon.png" alt="naver" />
        <span class="text-base font-semibold text-font-black">카카오 로그인</span>
      </div>
    </section>

    <section class="find flex flex-row gap-x-2 justify-center mt-4">
      <span class="block text-xs underline cursor-pointer">아이디 찾기</span>
      <span class="block text-xs underline cursor-pointer">비밀번호 찾기</span>
    </section>
  </main>
</template>

<script lang="ts" setup>
import Logo from '@/components/common/Logo.vue'
import InputLabel from '@/components/common/InputLabel.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const id = ref<string>('')
const idErrorLabel = ref<string>('')
const password = ref<string>('')
const passwordErrorLabel = ref<string>('')

const signin = () => {
  if (id.value !== 'test') {
    idErrorLabel.value = 'id가 올바르지 않습니다'
    return
  }

  idErrorLabel.value = ''

  if (password.value !== '1234') {
    passwordErrorLabel.value = '비밀번호가 올바르지 않습니다'
    return
  }

  passwordErrorLabel.value = ''

  router.push('/')
}
</script>

<style lang="scss" scoped></style>
