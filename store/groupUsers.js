import APIs from '~/assets/configurations/API_Config'
import Cookies from 'js-cookie'

import ULT from '~/plugins/ult'
const state = () => ({
  items: [],
  selectedIndex: -1,
  selectedItem: {
    group_id: 0,
    group_name: {
      value: '',
      invalid: false,
      invalidMsg: ''
    },
    description: {
      value: '',
      invalid: false,
      invalidMsg: ''
    },
    status: 1,
    groupPages: []
  },
  lstPages: [],
  lstRoles: []
  //lstFuncs: []
})

const getters = {
  // open: state => {
  //   return state.open
  // },
  // deleteWhat: state => {
  //   return state.deleteWhat
  // },
  // groupUser: state => {
  //   return state.groupUser
  // }
}

const mutations = {
  changeStateValue(state, payload) {
    state[payload.field] = payload.value
  },
  changeComplexStateSeletedValue(state, payload) {
    state.selectedItem[payload.field] = {
      ...state.selectedItem[payload.field],
      value: payload.value,
      invalid: false,
      invalidMsg: ''
    }
  },
  changeSimpleStateSeletedValue(state, payload) {
    state.selectedItem[payload.field] = payload.value
  },

  //set items by array object
  setListItems(state, payload) {
    state.items = payload
  },
  //action to set selectedItem by itemdb
  setSelectedItem(state, item) {
    state.selectedItem.group_id = item.group_id
    state.selectedItem.group_name.value = item.group_name
    state.selectedItem.description.value = item.description
    state.selectedItem.status = item.status
    state.selectedIndex = state.items.indexOf(item)
  },
  resetValid(state) {
    state.selectedItem.group_name.invalidMsg = ''
    state.selectedItem.group_name.invalid = false
    state.selectedItem.description.invalidMsg = ''
    state.selectedItem.description.invalid = false
  },
  //create new item - reset all property of item
  setNewItem(state) {
    state.selectedItem = {
      group_id: 0,
      group_name: {
        value: '',
        invalid: false,
        invalidMsg: ''
      },
      description: {
        value: '',
        invalid: false,
        invalidMsg: ''
      },
      status: 1,
      textGroupPage: '',
      groupPages: []
    }
    state.selectedIndex = -1
  },
  setGroupPage(state, pages) {
    state.selectedItem.groupPages = []
    pages.forEach(p => {
      state.selectedItem.groupPages.push(p)
    })
  },
  updateItem(state, payload) {
    let save_item = payload
    Object.assign(state.items[state.selectedIndex], save_item)
  },
  deleteItem(state) {
    state.items.splice(state.selectedIndex, 1)
  },

  unsetItem(state) {
    state.selectedItem = {
      group_id: 0,
      group_name: {
        value: '',
        invalid: false,
        invalidMsg: ''
      },
      description: {
        value: '',
        invalid: false,
        invalidMsg: ''
      },
      status: 1,
      textGroupPage: '',
      groupPages: []
    }
    state.selectedIndex = -1
  },

  setInvalid(state, payload) {
    state.selectedItem[payload.field] = {
      ...state.selectedItem[payload.field],
      invalid: true,
      invalidMsg: payload.message
    }
  },
  setListPages(state, payload) {
    state.lstPages = []
    state.lstRoles = []
    payload.pages.forEach(p => {
      state.lstPages.push({
        page_id: p.id,
        page_name: p.page_name
      })
    })
    payload.roles.forEach(p => {
      state.lstRoles.push({
        role_id: p.role_id,
        page_id: p.page_id,
        role_name: p.role_name
      })
    })
    //state.lstPages = payload.pages
    //state.lstRoles = payload.roles
  }
}

const actions = {
  async getListItems(vueContext, payload) {
    try {
      let response = await this.$getListGroupUsers()
      let errorCode = response.data.error.code
      let data = response.data.data
      if (errorCode === APIs.responses.OK.code) {
        vueContext.commit('setListItems', data.items)
        //call
        if (vueContext.state.lstPages.length <= 0)
          vueContext.dispatch('setListPages')
      } else if (APIs.responses[errorCode] != undefined) {
        this.$showError(
          this.$router.app,
          '???? x???y ra l???i khi l???y danh s??ch nh??m ng?????i d??ng. ' +
            APIs.responses[errorCode].message
        )
      } else {
        let errorMsg = response.data.error.message
        this.$showError(
          this.$router.app,
          '???? x???y ra l???i khi l???y danh s??ch nh??m ng?????i d??ng. ' + errorMsg
        )
      }
      this.app.wait.end('loadingGroupUser')
    } catch (errors) {
      this.app.wait.end('loadingGroupUser')
      this.$showErrorNotify(
        this.$router.app,
        errors,
        'Kh??ng th??? k???t n???i ?????n server'
      )
    }
  },

  async getGroupUser(vueContext, payload) {
    try {
      let response = await this.$getGroupUser(payload.group_id)
      let errorCode = response.data.error.code
      let data = response.data.data

      if (errorCode === APIs.responses.OK.code) {
        let groupInfo = data.group_infos
        if (groupInfo.length > 0)
          //vueContext.commit('setSelectedItem', groupInfo[0])
          vueContext.commit('setSelectedItem', payload)
        else return 0

        //console.log(vueContext.state.selectedIndex)
        let groupPage = data.group_page_infos
        vueContext.commit('setGroupPage', groupPage)
        return 1
      } else if (APIs.responses[errorCode] != undefined) {
        this.$showError(
          this.$router.app,
          '???? x???y ra l???i khi l???y th??ng tin nh??m ng?????i d??ng. ' +
            APIs.responses[errorCode].message
        )
      } else {
        let errorMsg = response.data.error.message
        this.$showError(
          this.$router.app,
          '???? x???y ra l???i khi l???y th??ng tin nh??m ng?????i d??ng. ' + errorMsg
        )
      }
      return 0
    } catch (errors) {
      this.$showErrorNotify(
        this.$router.app,
        errors,
        'Kh??ng th??? k???t n???i ?????n server'
      )
      return 0
    }
  },

  changeStateValue(vueContext, payload) {
    vueContext.commit('changeStateValue', payload)
  },
  changeComplexStateSeletedValue(vueContext, payload) {
    vueContext.commit('changeComplexStateSeletedValue', payload)
  },
  changeSimpleStateSeletedValue(vueContext, payload) {
    vueContext.commit('changeSimpleStateSeletedValue', payload)
  },
  setSelectedItem(vueContext, payload) {
    vueContext.commit('setSelectedItem', payload)
  },
  unsetItem(vueContext) {
    vueContext.commit('unsetItem')
  },
  resetValid(vueContext) {
    vueContext.commit('resetValid')
  },
  deleteItem(vueContext, payload) {
    this.$checkDeleteGroupUser(vueContext.state.selectedItem.group_id)
      .then(res => {
        let checkCode = res.data.error.code
        if (checkCode > 0) {
          this.$showError(this.$router.app, APIs.responses[checkCode].message)
          this.app.wait.end('loadingGroupUser')
          return
        }
        this.$deleteGroupUser(vueContext.state.selectedItem.group_id).then(
          response => {
            let errorCode = response.data.error.code
            if (errorCode === APIs.responses.OK.code) {
              vueContext.commit('deleteItem')
              vueContext.commit('unsetItem')
              vueContext.dispatch('getListItems')
              this.$showSuccess(
                this.$router.app,
                'X??a nh??m ng?????i d??ng th??nh c??ng.'
              )
            } else if (APIs.responses[errorCode] != undefined) {
              this.$showError(
                this.$router.app,
                '???? x???y ra l???i khi x??a nh??m ng?????i d??ng. ' +
                  APIs.responses[errorCode].message
              )
            } else {
              let errorMsg = response.data.error.message
              this.$showError(
                this.$router.app,
                '???? x???y ra l???i khi x??a nh??m ng?????i d??ng. ' + errorMsg
              )
            }

            this.app.wait.end('loadingGroupUser')
          }
        )
      })
      .catch(errors => {
        // Exceptions
        this.app.wait.end('loadingGroupUser')
        this.$showErrorNotify(
          this.$router.app,
          errors,
          'Kh??ng th??? k???t n???i ?????n server'
        )
      })
  },
  setNewItem(vueContext) {
    vueContext.commit('setNewItem')
  },
  async resetAccessCurrentPage(vueContext, group_id) {
    // let list_page = []
    // localStorage.setItem('list_page', JSON.stringify(list_page))
    vueContext.dispatch('app/GetRole', undefined, { root: true })
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      var neededAttributes = {}
      Cookies.remove(cookieName, neededAttributes)
    })
    this.$router.push('/login')
    //this.$router.push('/login')
    // let res_group_info = await this.$getGroupUser(group_id)
    // let group_error_code = res_group_info.data.error.code
    // if (group_error_code === APIs.responses.OK.code) {
    //   //chua tat cac trang o day
    //   let data_group = res_group_info.data.data.group_page_infos
    //   let list_page = []
    //   data_group.forEach(p => {
    //     let temp = list_page.find(i => i.page_id === p.page_id)
    //     if (temp == undefined) {
    //       //ko tim thay page thi moi them vao
    //       list_page.push({
    //         ...p
    //       })
    //     } else {
    //       let index = list_page.indexOf(temp)
    //       list_page[index].role_id = temp.role_id + ',' + p.role_id
    //     }
    //   })
    //   //Cookies.set('list_page', list_page)
    //   localStorage.setItem('list_page', JSON.stringify(list_page))
    //}
  },
  async saveItem(vueContext, payload) {
    let error = false
    try {
      if (vueContext.state.selectedItem.group_name.value.trim() === '') {
        error = true
        vueContext.commit('setInvalid', {
          field: 'group_name',
          message: 'Kh??ng ???????c ????? tr???ng'
        })
      } else if (
        vueContext.state.selectedItem.group_name.value.trim().length > 30
      ) {
        error = true
        vueContext.commit('setInvalid', {
          field: 'group_name',
          message: 'Kh??ng ???????c d??i qu?? 30 k?? t???'
        })
      }
      if (vueContext.state.selectedItem.description.value.trim() === '') {
        error = true
        vueContext.commit('setInvalid', {
          field: 'description',
          message: 'Kh??ng ???????c ????? tr???ng'
        })
      } else if (vueContext.state.selectedItem.description.value.length > 100) {
        error = true
        vueContext.commit('setInvalid', {
          field: 'description',
          message: 'Kh??ng ???????c d??i qu?? 100 k?? t???'
        })
      }

      if (
        vueContext.state.selectedIndex !== -1 &&
        (payload == undefined || payload.length <= 0)
      ) {
        //console.log(payload)
        //return
        error = true
        this.$showError(
          this.$router.app,
          'B???n ph???i ch???n ??t nh???t m???t quy???n cho 1 trang.'
        )
      }
      if (error) return 0
      let newItem = {
        group_id: vueContext.state.selectedItem.group_id,
        group_name: vueContext.state.selectedItem.group_name.value.trim(),
        description: vueContext.state.selectedItem.description.value.trim(),
        status: vueContext.state.selectedItem.status,
        group_page: payload
      }

      if (!error && vueContext.state.selectedIndex === -1) {
        let response = await this.$addGroupUser(newItem)
        let errorCode = response.data.error.code
        if (errorCode === APIs.responses.OK.code) {
          vueContext.commit('unsetItem')
          this.app.wait.start('loadingGroupUser')
          vueContext.dispatch('getListItems')
          this.$showSuccess(
            this.$router.app,
            'Th??m nh??m ng?????i d??ng th??nh c??ng.'
          )
          return 1
        } else if (APIs.responses[errorCode] != undefined) {
          this.$showError(
            this.$router.app,
            //'???? x???y ra l???i khi c???p nh???t th??m m???i nh??m ng?????i d??ng. ' +
            APIs.responses[errorCode].message
          )
        } else {
          let errorMsg = response.data.error.message
          this.$showError(
            this.$router.app,
            '???? x???y ra l???i khi c???p nh???t th??m m???i nh??m ng?????i d??ng. ' + errorMsg
          )
        }
        return 0
      } else if (!error && vueContext.state.selectedIndex !== -1) {
        let response = await this.$updateGroupUser(newItem)
        //console.log(response)
        let errorCode = response.data.error.code

        if (errorCode === APIs.responses.OK.code) {
          vueContext.commit('updateItem', newItem)
          //vueContext.commit('unsetItem')
          this.$showSuccess(
            this.$router.app,
            'C???p nh???t nh??m ng?????i d??ng th??nh c??ng.'
          )
          let currentGroup = Cookies.get('group')
          //console.log(currentGroup)
          if (newItem.group_id == parseInt(currentGroup)) {
            vueContext.dispatch('app/GetRole', undefined, { root: true })
            //console.log('RESET ')
            // vueContext.dispatch(
            //   'resetAccessCurrentPage',
            //   parseInt(currentGroup)
            // )
          }

          return 1
        } else if (APIs.responses[errorCode] != undefined) {
          this.$showError(
            this.$router.app,
            //'???? x???y ra l???i khi c???p nh???t nh??m ng?????i d??ng' +
            APIs.responses[errorCode].message
          )
        } else {
          let errorMsg = response.data.error.message
          this.$showError(
            this.$router.app,
            '???? x???y ra l???i khi c???p nh???t nh??m ng?????i d??ng. ' + errorMsg
          )
        }
        return 0
      }
    } catch (errors) {
      this.$showErrorNotify(
        this.$router.app,
        errors,
        'Kh??ng th??? k???t n???i ?????n server'
      )
      return 0
    }
  },
  // setUserId(vueContext, payload) {
  //   vueContext.commit('setUserId', payload)
  // },
  changeValue(vueContext, payload) {
    vueContext.commit('changeComplexStateSeletedValue', payload)
  },
  setListPages(vueContext) {
    this.$getListPages()
      .then(response => {
        let errorCode = response.data.error.code
        let data = response.data.data
        if (errorCode === APIs.responses.OK.code) {
          vueContext.commit('setListPages', {
            pages: data.pages,
            roles: data.page_roles
          })
        } else if (APIs.responses[errorCode] != undefined) {
          this.$showError(
            this.$router.app,
            //'???? x???y ra l???i khi l???y danh s??ch nh??m trang' +
            APIs.responses[errorCode].message
          )
        } else {
          let errorMsg = response.data.error.message
          this.$showError(
            this.$router.app,
            '???? x???y ra l???i khi l???y danh s??ch trang. ' + errorMsg
          )
        }
        this.app.wait.end('loadingGroupUser')
      })
      .catch(errors => {
        // Exceptions
        this.app.wait.end('loadingGroupUser')
        this.$showErrorNotify(
          this.$router.app,
          errors,
          'Kh??ng th??? k???t n???i ?????n server'
        )
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
