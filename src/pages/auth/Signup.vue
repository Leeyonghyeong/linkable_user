<template>
  <main class="flex flex-col">
    <section class="logo w-full flex justify-center">
      <Logo />
    </section>

    <section class="input-box flex flex-col gap-y-4 mt-12 px-6 flex-1">
      <InputLabel
        v-model:value="id"
        id="id"
        label="아이디"
        placeholder="아이디 입력"
        type="text"
        :errorLabel="idErrorLabel"
      />

      <InputLabel
        v-model:value="userName"
        id="name"
        label="이름"
        placeholder="이름 입력"
        type="text"
        :errorLabel="userNameErrorLabel"
      />

      <div class="info bg-gray-200 rounded-md text-gray-700 text-left p-2 text-xs">
        <p>· 실명 이름을 기재해주세요.</p>
        <p>· 본인확인이 불가능하면 도움을 드리기 어려울 수 있습니다.</p>
      </div>

      <div class="phone flex gap-x-2 items-end justify-between">
        <InputLabel
          v-model:value="phoneNumber"
          id="phone"
          label="전화번호"
          placeholder="전화번호 입력 (ex 01012345678)"
          type="number"
          errorLabel=""
          :flex="true"
          :disabled="isModifyPhone"
        />

        <button
          class="outline-none border-none w-24 h-10 focus:outline-none bg-primary text-font-black"
          @click="phoneVerifyHandler"
        >
          {{ !isModifyPhone ? '인증하기' : '번호변경' }}
        </button>
      </div>

      <div v-if="isModifyPhone" class="phone flex gap-x-2 items-end justify-between">
        <InputLabel
          v-model:value="phoneVerifyNumber"
          id="phone"
          label="인증번호"
          placeholder=""
          type="number"
          errorLabel=""
          :flex="true"
          :disabled="isVerifyNumber"
          autocomplete="one-time-code"
        />

        <button
          class="outline-none border-none w-24 h-10 focus:outline-none bg-primary text-font-black"
          @click="phoneVerifyNumberHandler"
          :disabled="isVerifyNumber"
        >
          {{ !isVerifyNumber ? '인증' : '완료' }}
        </button>
      </div>

      <InputLabel
        v-model:value="nickName"
        id="nickName"
        label="닉네임"
        placeholder="닉네임 입력"
        type="text"
        :errorLabel="nickNameErrorLabel"
      />

      <InputLabel
        v-model:value="password"
        id="password"
        label="비밀번호"
        placeholder="비밀번호 입력"
        type="password"
        :errorLabel="passwordErrorLabel"
      />

      <InputLabel
        v-model:value="rePassword"
        id="rePassword"
        label="비밀번호 확인"
        placeholder="비밀번호 입력"
        type="password"
        :errorLabel="rePasswordErrorLabel"
      />
    </section>
  </main>

  <footer class="py-3">
    <section class="submit px-6">
      <div
        class="bg-primary text-font-black rounded-lg h-12 flex justify-center items-center font-bold"
        @click="submit"
      >
        완료
      </div>
    </section>
  </footer>
</template>

<script lang="ts" setup>
import InputLabel from '@/components/common/InputLabel.vue'
import Logo from '@/components/common/Logo.vue'
import { confirmAlert, toastAlert } from '@/function/alert'
import { ref } from 'vue'
import api from '@/config/axios.config'
import { AccessTokenResponse, BooleanReturnResponse, CommonResponse } from '@/types/response'
import { useRouter } from 'vue-router'

const router = useRouter()

const id = ref<string>('')
const idErrorLabel = ref<string>('')
const userName = ref<string>('')
const userNameErrorLabel = ref<string>('')
const phoneNumber = ref<string>('')
const phoneVerifyNumber = ref<string>('')
const nickName = ref<string>('')
const nickNameErrorLabel = ref<string>('')
const password = ref<string>('')
const passwordErrorLabel = ref<string>('')
const rePassword = ref<string>('')
const rePasswordErrorLabel = ref<string>('')

const isModifyPhone = ref<boolean>(false)
const isVerifyNumber = ref<boolean>(false)

const checkExistId = async (): Promise<boolean> => {
  const { data } = await api.get<BooleanReturnResponse>(`/member/id-check?checkItem=${id.value}`)

  if (data.success) {
    return data.data
  } else {
    toastAlert({
      text: data.errorMessage,
      type: 'error',
      position: 'top',
    })

    return true
  }
}

const checkExistNickName = async (): Promise<boolean> => {
  const { data } = await api.get<BooleanReturnResponse>(`/member/nickname-check?checkItem=${nickName.value}`)

  if (data.success) {
    return data.data
  } else {
    toastAlert({
      text: data.errorMessage,
      type: 'error',
      position: 'top',
    })

    return true
  }
}

const phoneVerifyHandler = async () => {
  if (!phoneNumber.value) {
    toastAlert({
      text: '전화번호를 입력해 주세요',
      type: 'warning',
      position: 'top',
    })

    return
  }

  if (!isModifyPhone.value) {
    const phoneRegex = /^(01[016789]{1})?[0-9]{3,4}?[0-9]{4}$/

    if (!phoneRegex.test(phoneNumber.value)) {
      toastAlert({
        text: '전화번호 형식이 유효하지 않습니다',
        type: 'error',
        position: 'top',
      })

      return
    } else {
      const { data } = await api.post<CommonResponse>('/member/send/sms/verify', {
        phoneNumber: phoneNumber.value,
      })

      if (data.success) {
        toastAlert({
          text: '인증번호가 발송 되었습니다',
          type: 'success',
          position: 'top',
        })
      } else {
        toastAlert({
          text: data.errorMessage,
          type: 'error',
          position: 'top',
        })

        return
      }
    }
  }

  isVerifyNumber.value = false
  phoneVerifyNumber.value = ''
  isModifyPhone.value = !isModifyPhone.value
}

const phoneVerifyNumberHandler = async () => {
  if (!phoneVerifyNumber.value) {
    toastAlert({
      text: '인증번호를 입력해 주세요',
      type: 'warning',
      position: 'top',
    })

    return
  }

  const { data } = await api.post<CommonResponse>('/member/verify-check', {
    phoneNumber: phoneNumber.value,
    verifyNumber: phoneVerifyNumber.value,
  })

  if (data.success) {
    toastAlert({
      text: '인증 되었습니다',
      type: 'success',
      position: 'top',
    })

    isVerifyNumber.value = true

    return
  } else {
    toastAlert({
      text: data.errorMessage,
      type: 'error',
      position: 'top',
    })

    return
  }
}

const submit = async () => {
  if (
    !id.value ||
    !userName.value ||
    !phoneNumber.value ||
    !phoneVerifyNumber.value ||
    !nickName.value ||
    !password.value ||
    !rePassword.value
  ) {
    toastAlert({
      text: '모든 항목을 입력해 주세요',
      type: 'warning',
      position: 'top',
    })

    return
  }

  if (await checkExistId()) {
    toastAlert({
      text: '이미 사용중인 아이디 입니다',
      type: 'error',
      position: 'top',
    })

    return
  }

  if (await checkExistNickName()) {
    toastAlert({
      text: '이미 사용중인 닉네임 입니다',
      type: 'error',
      position: 'top',
    })

    return
  }

  if (!isVerifyNumber.value) {
    toastAlert({
      text: '전화번호 인증이 완료되지 않았습니다',
      type: 'error',
      position: 'top',
    })

    return
  }

  const requestData = {
    id: id.value,
    userName: userName.value,
    phoneNumber: phoneNumber.value,
    nickName: nickName.value,
    password: password.value,
  }

  const { data } = await api.post<AccessTokenResponse>('/member/signup', requestData)

  if (data.success) {
    const alert = await confirmAlert({
      title: '회원가입 완료',
      text: '회원가입이 완료 되었습니다',
      isCancelButton: false,
    })

    if (alert.isConfirmed) {
      router.replace('/')
    }
  } else {
    toastAlert({
      text: data.errorMessage,
      type: 'error',
      position: 'top',
    })

    return
  }
}
</script>

<style lang="scss" scoped></style>
