import { type } from "os";

export type reducerActionType = {
  type: string
  payload: {
    [key: string]: any
  }
}