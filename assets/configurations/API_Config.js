const APIs = {
  // Common configurations
  channel: 'CMS',
  responses: {
    OK: {
      code: 0,
      message: 'OK'
    },
    TOKEN_INVALID: {
      code: 1,
      message: 'Token không hợp lệ'
    },
    TOKEN_EXPIRE: {
      code: 2,
      message: 'Token đã hết hạn'
    },
    '-1': {
      name: 'UNKNOWN_ERROR',
      message: 'Lỗi không xác định'
    },
    '0': {
      name: 'SUCCESS',
      message: 'Thành công'
    },
    '1': {
      name: 'TOKEN_INVALID',
      message: 'Token không hợp lệ'
    },
    '2': {
      name: 'TOKEN_EXPIRE',
      message: 'Token đã hết hạn'
    },
    '3': {
      name: 'REQUEST_INVALID',
      message: 'Yêu cầu không hợp lệ'
    },
    '4': {
      name: 'SYSTEM_BUSY',
      message: 'Hệ thống bận'
    },
    '5': {
      name: 'UNKNOWN_ERROR',
      message: 'Lỗi không xác định'
    },
    '6': {
      name: 'PHONE_INVALID',
      message: 'Số điện thoại không hợp lệ'
    },
    '7': {
      name: 'MAIL_INVALID',
      message: 'Email không hợp lệ'
    },
    '999': {
      name: 'SYSTEM_ERROR',
      message: 'Lỗi hệ thống'
    },
    '1010': {
      name: 'ACCOUNT_IS_ADMIN',
      message: 'Không thể xóa tài khoản quản trị viên'
    },
    '1101': {
      name: 'IP_EXIST',
      message: 'Địa chỉ IP đã tồn tại.'
    },
    '1102': {
      name: 'SCHEDULE_EXIST',
      message: 'Lịch truy cập đã tồn tại.'
    },
    '1103': {
      name: 'SCHEDULE_DETAIL_EXIST',
      message: 'Lịch truy cập chi tiết đã tồn tại.'
    },
    '1104': {
      name: 'ACTION_INVALID',
      message: 'Hành động không đúng.'
    },
    '1105': {
      name: 'ACCOUNT_LOCKED',
      message: 'Tài khoản đã bị khóa.'
    },
    '1106': {
      name: 'ACCOUNT_OR_PASSWORD_INCORECT',
      message: 'Tài khoản hoặc mật khẩu sai.'
    },
    '1107': {
      name: 'ACCOUNT_EXIST',
      //message: 'Tài khoản không tồn tại.'
      message: 'Tên đăng nhập đã tồn tại.'
    },
    '1108': {
      name: 'USER_NOT_EXIST',
      message: 'Tên đang nhập đã tồn tại.'
    },
    '1109': {
      name: 'PASSWORD_INCORECT',
      message: 'Mật khẩu không đúng.'
    },
    '1110': {
      name: 'ACCOUNT_IS_ADMIN',
      message: 'Tài khoản là Admin.'
    },
    '1111': {
      name: 'GROUP_IS_EXIST',
      message: 'Nhóm đã tồn tại.'
    },
    '1112': {
      name: 'GROUP_NOT_EXIST',
      message: 'Nhóm không tồn tại.'
    },
    '1113': {
      name: 'THE_GROUP_HAS_USERS',
      message: 'Nhóm không tồn tại.'
    },
    '1114': {
      name: 'THE_GROUP_HAS_USERS',
      message: 'Nhóm đã có người dùng.'
    },
    '1115': {
      name: 'IP_ADDRESS_ACCESS_DENIED',
      message:
        'IP của bạn đã bị chặn quyền truy cập. Vui lòng liên hệ quản trị viên để biết thêm thông tin'
    },
    '1116': {
      name: 'SCHEDULE_ACCESS_DENIED',
      message: 'Lịch truy cập của bạn không được cấp tài thời điểm này.'
    },
    '1117': {
      name: 'SERVER_CODE_EXIST',
      message: 'Mã Server đã tồn tại.'
    },
    '1118': {
      name: 'SERVER_NAME_EXIST',
      message: 'Tên Server đã tồn tại.'
    },
    '1119': {
      name: 'MODULE_NAME_EXIST',
      message: 'Module đã tồn tại.'
    },
    '1120': {
      name: 'REGIONAL_COMPANY_CODE_EXIST',
      message: 'Mã công ty khu vực đã tồn tại.'
    },
    '1121': {
      name: 'REGIONAL_COMPANY_NAME_EXIST',
      message: 'Tên công ty khu vực đã tồn tại.'
    },
    '1122': {
      name: 'REGIONAL_COMPANY_NOT_EXIST',
      message: 'Công ty khu vực không tồn tại.'
    },
    '1123': {
      name: 'MODULE_EXPORT_NAME_EXIST',
      message: 'Tên Module Export đã tồn tại.'
    },
    '1124': {
      name: 'SERVER_NOT_EXIST',
      message: 'Server không tồn tại.'
    },
    '1125': {
      name: 'GROUP_COMMAND_NOT_EXIST',
      message: 'Nhóm chức năng không tồn tại.'
    },
    '1126': {
      name: 'SMS_COMMAND_CODE_EXIST',
      message: 'Mã cú pháp MO đã tồn tại.'
    },
    '1127': {
      name: 'SMS_COMMAND_NOT_EXIST',
      message: 'Mã cú pháp MO không tồn tại.'
    },
    '1128': {
      name: 'SMS_CONTENT_EXIST',
      message: 'Mã cú pháp MT đã tồn tại.'
    },
    '1129': {
      name: 'SMS_CONTENT_NOT_EXIST',
      message: 'Mã cú pháp MT không tồn tại.'
    },
    '1130': {
      name: 'NO_MODULE_IN_SERVER ',
      message: 'Server bạn chọn chưa cấu hình module export.'
    },
    '1131': {
      name: 'MODULE_EXPORT_IS_PROCESSING ',
      message: 'Module Export đang xuất cước.'
    },
    '1132': {
      name: 'NAME_SHOW_IN_TBC_EXIST ',
      message: 'Tên hiển thị trên TBC đã tồn tại.'
    },
    '1133': {
      name: 'CYCLE_CODE_EXIST ',
      message: 'Mã chu kỳ cước đã tồn tại.'
    },
    '1134': {
      name: 'CYCLE_NAME_EXIST ',
      message: 'Tên chu kỳ cước đã tồn tại.'
    },
    '1135': {
      name: 'SMS_GROUP_NAME_EXIST ',
      message: 'Tên nhóm SMS đã tồn tại.'
    },
    '1136': {
      name: 'SMS_GROUP_CODE_EXIST ',
      message: 'Mã nhóm SMS đã tồn tại.'
    },
    '1138': {
      name: 'TEMPLATE_NAME_EXIST ',
      message: 'Tên mẫu đã tồn tại.'
    },
    '1139': {
      name: 'TEMPLATE_EMAIL_NAME_EXSIST ',
      message: 'Tên mẫu email đã tồn tại.'
    },
    '1140': {
      name: 'THE_SCHEDULE_HAS_USER ',
      message: 'Lịch truy cập đang được áp dụng cho tài khoản người dùng.'
    },
    '1141': {
      name: 'THE_SCHEDULE_HAS_CYCLE ',
      message: 'Lịch truy cập đang được áp dụng cho chu kỳ cước.'
    },
    '1142': {
      name: 'SUB_HAS_BEEN_SEND_TBC ',
      message: 'Thuê bao đã được gửi thông báo cước.'
    }
  },

  // APIs
  login: {
    url: '/user/login',
    method: 'POST',
    responses: {
      CREDENTIALS_INVALID: {
        code: 1001,
        message: 'Tên người dùng hoặc mật khẩu không hợp lệ'
      }
    }
  },
  //http://222.252.16.140:10000/api/cms/user/get_role_by_user?transid=xxx&channel=cms
  getRoleByUser: {
    url: '/user/get_role_by_user',
    method: 'GET',
    responses: {}
  },

  getListSchedule: {
    url: '/schedule/list',
    method: 'GET'
  },
  getListGroupUsers: {
    url: '/group/get_list',
    method: 'GET',
    responses: {}
  },
  getListUsers: {
    url: '/user/list',
    method: 'GET'
  },
  getUser: {
    url: '/user/detail',
    method: 'GET'
  },
  updateUser: {
    url: '/user/update',
    method: 'POST'
  },
  addUser: {
    url: '/user/add',
    method: 'POST',
    responses: {
      ACCOUNT_EXIST: {
        code: 101,
        message: 'Tài khoản đã tồn tại'
      }
    }
  },
  resetUserPass: {
    url: '/user/reset_pass',
    method: 'POST',
    responses: {}
  },
  deleteUser: {
    url: '/user/delete',
    method: 'POST',
    responses: {}
  },
  getListPages: {
    url: '/page/list',
    method: 'GET',
    responses: {}
  },
  getGroupUser: {
    url: '/group/get_info',
    method: 'GET',
    responses: {}
  },
  deleteGroupUser: {
    url: '/group/delete',
    method: 'POST',
    responses: {}
  },
  updateGroupUser: {
    url: '/group/update',
    method: 'POST',
    responses: {}
  },
  addGroupUser: {
    url: '/group/add',
    method: 'POST',
    responses: {}
  },
  checkDeleteGroupUser: {
    url: '/group/check_delete',
    method: 'POST',
    responses: {}
  }
  //END UsersAPI
  // API Webview

  //list 63 tỉnh thành

  // loại sản phẩm

  // END API Webview
}

export default APIs
