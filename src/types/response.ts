export interface CommonResponse {
  success: boolean
  errorMessage: string
}

export interface AccessTokenResponse extends CommonResponse {
  data: {
    accessToken: string
  }
}

export interface BooleanReturnResponse extends CommonResponse {
  data: boolean
}
