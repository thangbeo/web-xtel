import APIs from '~/assets/configurations/API_Config'
import uniqid from 'uniqid'
import Cookies from 'js-cookie'

// Inject APIs
export default (context, inject) => {
  const channel = APIs.channel
  // context.app.$axios.setHeader('token_key', Cookies.get('token'))
  // LOGIN
  inject('login', async ({ username, password, ip }) => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.login.url,
      method: APIs.login.method,
      headers: {
        ip: ip
      },
      data: {
        channel,
        transid,
        username,
        password
      }
    })
    return response
  })

  inject('getRoleByUser', async token_key => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getRoleByUser.url,
      method: APIs.getRoleByUser.method,
      headers: {
        token_key: token_key !== undefined ? token_key : Cookies.get('token')
      },
      params: {
        channel,
        transid
      }
    })
    return response
  })

  // getListSchedule
  inject('getListSchedule', async () => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getListSchedule.url,
      method: APIs.getListSchedule.method,
      headers: {
        token_key: Cookies.get('token')
      }
    })
    return response
  })

  // getListGroupUsers
  inject('getListGroupUsers', async () => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getListGroupUsers.url,
      method: APIs.getListGroupUsers.method,
      headers: {
        token_key: Cookies.get('token')
      }
    })
    return response
  })

  // GET LIST USER
  inject('getListUsers', async (pageIndex, pageSize) => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getListUsers.url,
      method: APIs.getListUsers.method,
      headers: {
        token_key: Cookies.get('token')
      },
      params: {
        channel,
        transid,
        page_index: pageIndex,
        page_size: pageSize
      }
    })
    return response
  })

  inject('getUser', async user_id => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getUser.url,
      method: APIs.getUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      params: {
        channel,
        transid,
        user_id: user_id
      }
    })
    return response
  })

  // UPDATE USER
  inject('updateUser', async item => {
    //console.log(item)
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.updateUser.url,
      method: APIs.updateUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        user_id: item.user_id,
        full_name: item.full_name, // item.full_name- errro
        birthday: item.birthday,
        email: item.email,
        phone_int: item.phone_number,
        mobile_int: item.mobile_number, //item.mobile_number,//khong dc de trong
        sex: item.sex,
        address: item.address,
        unit: item.unit,
        status: parseInt(item.status),
        list_group: item.list_group,
        update_by: Cookies.get('username'),
        schedule_id: item.schedule_id
      }
    })
    return response
  })

  inject('addUser', async item => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.addUser.url,
      method: APIs.addUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        user_name: item.user_name,
        password: item.password,
        full_name: item.full_name, // item.full_name- errro
        birthday: item.birthday,
        email: item.email,
        phone_int: item.phone_number,
        mobile_int: item.mobile_number, //item.mobile_number,//khong dc de trong
        sex: item.sex,
        address: item.address,
        unit: item.unit,
        status: parseInt(item.status),
        list_group: item.list_group,
        create_by: Cookies.get('username'),
        schedule_id: item.schedule_id
      }
    })
    return response
  })

  // POST USER RESET PASS
  inject('resetUserPass', async item => {
    //console.log(item)
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.resetUserPass.url,
      method: APIs.resetUserPass.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        user_id: item.user_id
      }
    })
    return response
  })

  inject('deleteGroupUser', async item_id => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.deleteGroupUser.url,
      method: APIs.deleteGroupUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        group_id: item_id
      }
    })
    return response
  })

  inject('deleteUser', async item_id => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.deleteUser.url,
      method: APIs.deleteUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        user_id: item_id
      }
    })
    return response
  })

  inject('getListPages', async () => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getListPages.url,
      method: APIs.getListPages.method,
      headers: {
        token_key: Cookies.get('token')
      },
      params: {
        channel,
        transid
      }
    })
    return response
  })

  inject('getGroupUser', async group_id => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.getGroupUser.url,
      method: APIs.getGroupUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      params: {
        channel,
        transid,
        group_id: group_id
      }
    })
    return response
  })

  inject('addGroupUser', async item => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.addGroupUser.url,
      method: APIs.addGroupUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        group_name: item.group_name,
        description: item.description,
        status: item.status,
        group_page: '',
        create_by: Cookies.get('username')
      }
    })
    return response
  })

  inject('updateGroupUser', async item => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.updateGroupUser.url,
      method: APIs.updateGroupUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        group_id: item.group_id,
        group_name: item.group_name,
        description: item.description,
        status: item.status,
        group_page: item.group_page,
        update_by: Cookies.get('username')
      }
    })
    return response
  })

  inject('checkDeleteGroupUser', async item_id => {
    let transid = uniqid()
    const response = await context.app.$axios({
      url: APIs.checkDeleteGroupUser.url,
      method: APIs.checkDeleteGroupUser.method,
      headers: {
        token_key: Cookies.get('token')
      },
      data: {
        channel,
        transid,
        group_id: item_id
      }
    })
    return response
  })
}
