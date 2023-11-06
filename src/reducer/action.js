// actions.js
export const ACTIVE_EXPERIMENT = 'ACTIVE_EXPERIMENT';

export const activeExperiment = (experimentDetails) => {
  return{
  type: ACTIVE_EXPERIMENT,
  payload: experimentDetails,
}};