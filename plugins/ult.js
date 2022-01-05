import Cookies from 'js-cookie'
import Rules from '~/assets/configurations/Rules'
//import { app } from '../../store/app'
export default (context, inject) => {
  inject('showErrorNotify', (app, errors, text) => {
    context.app.$showLogError(errors, text)
    context.app.$showNotify(app, 'error', text)
  })

  // Hiển thị thông báo lỗi
  inject('showError', (app, text) => {
    context.app.$showNotify(app, 'error', text)
  })

  // Hiển thị thông báo thành công
  inject('showSuccess', (app, text) => {
    context.app.$showNotify(app, 'success', text)
  })

  // Show log lỗi. (Đã cũ. Không dùng)
  inject('showLogError', (errors, text) => {
    let response = errors.response
    let request = errors.request
    console.log(text, {
      response,
      request,
      errors
    })
  })

  // Log dữ liệu. (Đã cũ. Không nên dùng)
  inject('showLog', (text, res = null) => {
    console.log(text, res)
  })

  // Hiển thị thông báo
  inject('showNotify', (app, type, text) => {
    app.$notify({
      group: 'main',
      type: type,
      text: text
      // duration:5000,
      // position:'top right'
    })
  })

  // Hiển thị cảnh báo
  inject('showWarnNotify', (app, text) => {
    context.app.$showNotify(app, 'warn', text)
  })

  // Check số
  inject('isNumber', str => {
    try {
      let number = parseInt(str)
      return true
    } catch {
      return false
    }
  })

  // Giới hạn ký tự
  inject('limitString', (str, number, display) => {
    if (context.app.$isNullOrEmpty(str)) return 'Không được để trống.'
    if (str.length < number)
      return display.length > 0 ?
        display + ' không được ít hơn ' + number + ' ký tự.' :
        'Không được ít hơn ' + number + ' ký tự.'
  })

  // Check ký tự đặc biệt
  inject('isHasSpecial', str => {
    let sp = "~;+@#$%^&*(){} |=-'"
    let strLower = str.toLowerCase()
    let isOK = false
    for (let i = 0; i < strLower.length; i++) {
      if (sp.indexOf(strLower[i]) >= 0) {
        isOK = true
        break
      }
    }
    return isOK
  })

  // Check tiếng việt
  inject('isHasVietnamese', str => {
    let vn =
      'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ'
    let strLower = str.toLowerCase()

    let isOK = false
    for (let i = 0; i < strLower.length; i++) {
      if (vn.indexOf(strLower[i]) >= 0) {
        isOK = true
        break
      }
    }
    //console.log(isOK)
    return isOK
  })



  // Check rỗng
  inject('isNullOrEmpty', str => {
    return str === null || str === undefined || str === '' || str.length === 0
  })
  inject('isObject', obj => {
    return obj == null || obj == undefined
  })

  // regex check sdt mobifone
  inject('isMobilePhone', str => {
    let phoneNot84 = /[0]{1}[35789]{1}[0-9]{8}$/
    let phone84 = /^[84]{2}[35789]{1}[0-9]{8}$/
    return phoneNot84.test(str) || phone84.test(str)
  })

  // Validate email
  inject('isEmail', str => {
    let email = /^(([a-zA-Z]{1,}[^<>()[\]\\.,!#$%^&*~|{}'?;:\s@"]+(\.[^<>()[\]\\.,!#$%^&*~|{}'?;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.test(str)
  })

  // Validate IP Address
  inject('isIPAddress', str => {
    let ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return ipRegex.test(str)
  })

  inject('getDateVN', strDate => {
    if (!strDate) return ''
    if (strDate.indexOf(' ')) strDate = strDate.split(' ')[0]
    return strDate
  })

  inject('formatDateVNToISO', strDate => {
    if (!strDate) return ''
    if (strDate.indexOf(' ')) strDate = strDate.split(' ')[0]
    const [day, month, year] = strDate.split('/')
    return `${year}-${month}-${day}`
  })

  //strDate=yyy-mm-dd   to dd-mm-yyyy_HH:mm:ss
  inject('formatDateISOToDbFormat', (strDate, strMin = '') => {
    if (!strDate) return ''
    const [year, month, day] = strDate.split('-')

    strDate = `${day}-${month}-${year}`
    if (strMin == undefined || strMin == '') return strDate + `_00:00:00`
    else {
      if (strMin.length == 5) return strDate + '_' + strMin + ':00'
      return strDate + '_' + strMin
    }
    //return `${day}/${month}/${year}_00:00:00`
  })

  // format ngày YYYY-MM-DD to DD-MM-YYYY
  inject('ymdToDmy', str => {
    str = str.split('-')
    let parsed = str[2] + '-' + str[1] + '-' + str[0]
    return parsed
  })

  //-------PERMISSION ---------------------

  //truy cap duoc url nay ko
  inject('isAccessUrl', (roles, url) => {
    //let lst_page = roles
    let result = Array.from(roles).find(p => p.page_url === url) !== undefined
    return result
  })

  // Check quyền
  inject('isAccessAction', (roles, pageId, actionId) => {
    let page = Array.from(roles).find(p => p.id === pageId)
    if (page == undefined) return false
    let role_id = page.role_list
    if (!isNaN(role_id)) {
      return role_id == actionId
    }

    let lst_role = role_id.split(',')
    //console.log(lst_role, 'ROLEs')
    let isExit = false
    lst_role.forEach(r => {
      if (!isExit && parseInt(r) == actionId) {
        isExit = true
      }
    })

    return isExit
  })

  // Check role
  inject('checkRole', (actionId, pageId) => {
    let isAllowed = context.app.$isAccessAction(
      context.store.state.app.roles,
      pageId,
      actionId
    )
    return isAllowed
  })

  // Logout
  inject('logout', router => {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      }
      Cookies.remove(cookieName, neededAttributes)
    })

    router.push('/login')
  })

  // Token invalid
  inject('TokenInvalid', (UID, request, response) => {
    console.log('[ ' + UID + ' ] Token hết hạn hoặc không hợp lệ: ', {
      request,
      response
    })
    context.app.$logout()
    return {
      error: true
    }
  })

  // Format currency
  inject('formatMoney', payload => {
    try {
      var decimalCount = 0
      var thousands = '.'
      var decimal = ','

      const negativeSign = payload.amount < 0 ? '-' : ''

      let i = parseInt(
        (payload.amount = Math.abs(Number(payload.amount) || 0).toFixed(
          decimalCount
        ))
      ).toString()
      let j = i.length > 3 ? i.length % 3 : 0

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount ?
          decimal +
          Math.abs(payload.amount - i)
          .toFixed(decimalCount)
          .slice(2) :
          '')
      )
    } catch (e) {
      console.log(e)
    }
  })

  // Buffer to string 64
  inject('bufferTo64', array => {
    let uint8 = new Uint8Array(array)
    let string = uint8.reduce((data, byte) => {
      return data + String.fromCharCode(byte)
    }, '') //String.fromCharCode(...unit8)
    let base64string = btoa(string)
    return base64string
  })

  // Vẽ captcha
  inject('createCaptcha', () => {
    //clear the contents of captcha div first
    window.document.getElementById('captchaInput').innerHTML = ''
    let charsArray =
      'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lengthOtp = 6
    let captcha = []
    for (let i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      let index = Math.floor(Math.random() * charsArray.length + 1) //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index])
      else i--
    }
    let canv = window.document.createElement('canvas')
    canv.id = 'captchaCanvas'
    canv.width = 100 //window.document.getElementById('captchaInput').clientWidth
    canv.height = 50
    let ctx = canv.getContext('2d')
    ctx.font = '30px Georgia'
    let textWidth = ctx.measureText(captcha.join('')).width
    canv.width = textWidth + 5
    ctx.font = '30px Georgia'
    ctx.strokeText(captcha.join(''), 0, 30)
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.captchaString = captcha.join('')
    window.document.getElementById('captchaInput').appendChild(canv) // adds the canvas to the body element
  })
}