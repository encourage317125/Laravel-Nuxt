import { PAYROLL } from '~/constants/payroll'

export const state = () => ({
  isEdit: false,
  payroll: PAYROLL,
})

export const mutations = {
  SET_PAYROLL(state, payload) {
    state.payroll = payload
  },
  SET_ID(state, payload) {
    state.payroll.id = payload
  },
  SET_AMOUNT(state, payload) {
    state.payroll.amount = payload
  },
  SET_COMMENTS(state, payload) {
    state.payroll.comments = payload
  },
  SET_IS_EDIT(state, payload) {
    state.isEdit = payload
  },
}

export const getters = {
  getIsEdit: (state) => state.isEdit,
  getId: (state) => state.payroll.id,
  getAmount: (state) => state.payroll.amount,
  getComments: (state) => state.payroll.comments,
}
