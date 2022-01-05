import Cookies from 'js-cookie'
import ULT from '~/plugins/ult'
import APIs from '~/assets/configurations/API_Config'
export const state = () => ({
  ip: '',
  roles: [],
  pageSizes: [10, 20, 50, 100, 150, 200, 300],
  getRoles: false,

  // langID: {
  //   vi: {
  //     text: 'Tiếng việt',
  //     value: 1
  //   },
  //   en: {
  //     text: 'English',
  //     value: 2
  //   }
  // },
  checkLanguage: 1,
  paymentStatus: {
    unpaid: {
      text: 'Chưa TT',
      value: 0
    },
    success: {
      text: 'T.Công',
      value: 1
    },
    failed: {
      text: 'T.Bại',
      value: 2
    },
    refund: {
      text: 'HH.1P',
      value: 3
    },

    refundAll: {
      text: 'HH.TB',
      value: 4
    }
  },
  buyCardStatus: {
    notBuyYet: {
      text: 'Chưa mua',
      value: 0
    },
    success: {
      text: 'T.Công',
      value: 1
    },
    failed: {
      text: 'T.Bại',
      value: 2
    }
  },
  sendMailStatus: {
    notSendYet: {
      text: 'Chưa gửi',
      value: 0
    },
    sending: {
      text: 'Đang gửi',
      value: 3
    },
    success: {
      text: 'T.Công',
      value: 1
    },
    failed: {
      text: 'T.Bại',
      value: 2
    }
  },
  // 1 PROVIDER PRODUCT
  // 2 PAYMENT VENDOR
  // 3 DOMESTIC BANK CARD
  // 4 INTERNATIONAL PAYMENT CARD
  partnerType: {
    productProvider: {
      text: 'Đối tác cung cấp thẻ',
      value: 1
    },
    paymentVendor: {
      text: 'Đối tác thanh toán',
      value: 2
    },
    domesticBankCard: {
      text: 'Ngân hàng',
      value: 3
    },
    internationalPaymentCard: {
      text: 'Thanh toán quốc tế',
      value: 4
    }
  },

  partnerType: [],
  productGroup: [],
  pubisherProductType: [],
  denomination: [],
  discountList: [],
  publisherList: [],

  discountType: {
    percent: {
      text: 'Phần trăm',
      value: 1
    },
    amount: {
      text: 'Số tiền cố định',
      value: 2
    }
  }
})

export const mutations = {
  ClientPrivateIP(state, ip) {
    state.ip = ip
  },
  setRole(state, payload) {
    // console.log(payload)
    state.roles = payload
    state.getRoles = true
  },
  setUltilities(state, payload) {
    state.partnerType = payload.partnerType
    state.productGroup = payload.productGroup
    state.pubisherProductType = payload.pubisherProductType
    state.denomination = payload.denomination
    state.discountList = payload.discountList
    state.publisherList = payload.publisherList

  },
  setLanguage(state, payload) {
    if (payload == 1) {
      state.checkLanguage = 1
    } else {
      state.checkLanguage = 2
    }
  }
}

export const actions = {
  async GetRole(vueContext, payload) {
    this.$getRoleByUser(payload).then(response => {
      // console.log(response.data)
      let errorCode = response.data.error.code
      if (errorCode === APIs.responses.OK.code) {
        vueContext.dispatch('getUtilities')
        vueContext.commit('setRole', response.data.data.lsPageInfos)
      } else if (APIs.responses[errorCode] != undefined) {
        this.$showError(this.$router.app, APIs.responses[errorCode].message)
      } else {
        let errorMsg = response.data.error.message
        this.$showError(
          this.$router.app,
          'Đã xảy ra lỗi khi lấy thông tin quyền truy cập. ' + errorMsg
        )
      }
    })
  },

  async getUtilities(
    vueContext,
    payload = {
      groupProduct: undefined,
      productType: undefined,

    }
  ) {
    let {
      groupProduct,
      productType,

    } = payload
    if (groupProduct === undefined) {
      groupProduct = null
    }


    if (productType === undefined) {
      productType = null
    }

    const getPartnerType = await this.$getPartnerType()
    const getProductGroup = await this.$getProductGroup()
    const getPubisherProductType = await this.$getPubisherProductType(
      groupProduct
    )
    const getDenomination = await this.$getDenomination(productType)
    const getDiscountList = await this.$getDiscountList()
    const getPublisherList = await this.$getPublisherList()


    if (


      !getPartnerType.error &&
      !getProductGroup.error &&
      !getPubisherProductType.error &&
      !getDenomination.error &&
      !getDiscountList.error &&
      !getPublisherList.error
    ) {
      vueContext.commit('setUltilities', {
        partnerType: getPartnerType.data.data.items,
        productGroup: getProductGroup.data.data.items,
        pubisherProductType: getPubisherProductType.data.data.items,
        denomination: getDenomination.data.data.items,
        discountList: getDiscountList.data.data.items,
        publisherList: getPublisherList.data.data.items,

      })
    }
  },
  setLanguage(vueContext, payload) {
    vueContext.commit('setLanguage', payload)
  }
}

export const getters = {
  listSubscriberStatus(state) {
    let list = []
    Object.keys(state.subscriberStatus).map(key => {
      list.push({
        text: state.subscriberStatus[key].text,
        value: state.subscriberStatus[key].value
      })
    })
    return list
  },
  listPaymentStatus(state) {
    let list = []
    Object.keys(state.paymentStatus).map(key => {
      list.push({
        ...state.paymentStatus[key]
      })
    })
    return list
  },
  listProductGroup(state) {
    let list = []
    state.productGroup.map(group => {
      list.push({
        text: group.name,
        value: group.id
      })
    })
    return list
  },
  listDenomination(state) {
    let list = []
    state.denomination.map(denomination => {
      list.push({
        text: denomination.price,
        value: denomination.id
      })
    })
    return list
  },
  listDiscount(state) {
    let list = []
    state.discountList.map(discount => {
      list.push({
        text: discount.description,
        value: discount.discount_type
      })
    })
    return list
  },
  listPubisherProductType(state) {
    let list = []
    state.pubisherProductType.map(productType => {
      list.push({
        text: productType.product_type_name,
        value: productType.id
      })
    })
    return list
  },
  listPublisher(state) {
    let list = []
    state.publisherList.map(publisher => {
      list.push({
        text: publisher.name,
        value: publisher.id
      })
    })
    return list
  }
}