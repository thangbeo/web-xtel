const Rules = {
  System: {
    id: 2,
    GroupUser: {
      id: 3,
      actions: {
        view_detail: 2,
        add: 3,
        edit: 4,
        delete: 5
      }
    },
    User: {
      id: 4,
      actions: {
        view_list: 6,
        add: 7,
        edit: 8,
        delete: 9,
        reset_pass: 10
      }
    },
    transactionHistory: {
      id: 8,
      actions: {
        viewList: 12,
        viewDetail: 13,
        refund: 14,
        resendMail: 15
      }
    }
  }
}

export default Rules
