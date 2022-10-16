import { type } from "os";

export type reducerActionType = {
  type: 'CHANGE_NAME' | 'CHANGE_AGE',
  payload: {
    [key: string]: any
  }
}