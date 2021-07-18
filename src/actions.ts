
export type Action = {
  type: string;
  payload: any;
}

export const SET_REQUESTING = 'setRequesting'
export const SET_ERROR = 'setError'
export const SET_GAME_LOG = 'setGameLog'
export const SET_DECK_REPORTS = 'setDeckReports'
export const SET_RETURN_PAYLOAD = 'setReturnPayload'
