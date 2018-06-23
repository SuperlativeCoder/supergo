import { AxiosStatic } from "axios"
import { Themis } from "@/client/api/themis/Themis"
import { LoDashStatic } from "lodash"
import { Pluto } from "@/client/api/pluto/Pluto";
import { Mars } from "@/client/api/mars/Mars";
import { Fd } from "@/client/api/fd/Fd";

declare module '*.sass' {
  const value: any
  export default value
}

declare module '*.json' {
  const value: any
  export default value
}

declare module 'vue/types/vue' {
  interface Vue {
    $_: LoDashStatic
    $message: Function
    $notify: Function
    $http: AxiosStatic
    $api: {
      themis: Themis,
      pluto: Pluto,
      mars: Mars,
      fd: Fd
    }
  }
}

declare module 'axios/index' {
	export interface AxiosResponse {
	}
}