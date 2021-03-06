import axios, { AxiosRequestConfig } from 'axios'
import { Dispatch } from 'redux'
import { SET_DECK_REPORTS, SET_ERROR, SET_GAME_LOG, SET_REQUESTING, SET_RETURN_PAYLOAD } from '../actions'
import sampleResponse from '../sampleResponses/sampleResponse'
import { createThrottledFunction } from '../utils/createThrottledFunction'

const logPasteRequest = async (gameLog: string, dispatch: Dispatch<any>): Promise<void> => {
  dispatch({type: SET_REQUESTING, payload: true})
  dispatch({type: SET_GAME_LOG, payload: gameLog})
  if (window.location.hostname === 'localhost'){
    dispatch({type: SET_RETURN_PAYLOAD, payload: sampleResponse})
    dispatch({type: SET_DECK_REPORTS, payload: sampleResponse.deckReports})
    dispatch({type: SET_ERROR, payload: null})
    dispatch({type: SET_REQUESTING, payload: false})
    return Promise.resolve()
  } else {
    const config: AxiosRequestConfig = {
      method: 'post',
      url: 'https://1qyb0hokg3.execute-api.us-east-2.amazonaws.com/dominionLogAnalyzer',
      headers: {'Content-Type': 'application/json'},
      data: {'logStr': gameLog}
    }
    try {
      const response = await axios(config)
      dispatch({type: SET_RETURN_PAYLOAD, payload: response.data})
      if (response.status === 200){
        dispatch({type: SET_DECK_REPORTS, payload: response.data.deckReports})
        dispatch({type: SET_ERROR, payload: null})
      } else {
        dispatch({type: SET_DECK_REPORTS, payload: []})
        dispatch({type: SET_ERROR, payload: response.data})
      }
    }
    catch(error) {
      console.log(JSON.stringify(error))
      dispatch({type: SET_DECK_REPORTS, payload: []})
      dispatch({type: SET_ERROR, payload: error?.message})
      return Promise.reject()
    }
    dispatch({type: SET_REQUESTING, payload: false})
  }
  return Promise.resolve()
}

export const throttledLogPasteRequest = createThrottledFunction(logPasteRequest, 1000)
