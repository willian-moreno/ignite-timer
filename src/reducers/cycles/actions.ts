import { Cycle } from './reducer'

export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_ACTIVE_CYCLE = 'INTERRUPT_ACTIVE_CYCLE',
  FINISH_ACTIVE_CYCLE = 'FINISH_ACTIVE_CYCLE',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function interruptActiveCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_ACTIVE_CYCLE,
  }
}

export function finishActiveCycleAction() {
  return {
    type: ActionTypes.FINISH_ACTIVE_CYCLE,
  }
}
