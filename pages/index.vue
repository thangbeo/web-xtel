<template>
  <div>
    <client-only>
      <div class="main_body">
        <!-- <v-carousel
                      light
                      hide-delimiter-background
                      show-arrows-on-hover
                      height="100%"
                      class="custom-active-icon"
                      :show-arrows="temphotdeal == 0 ? false : true"
                    >
                      <template >
                        <div >
                          <v-carousel-item>
                     
                          </v-carousel-item>
                        </div>
                      </template>
       </v-carousel> -->
        <v-carousel
          light
          hide-delimiter-background
          :show-arrows="false"
          height="100%"
          class="custom-active-icon"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="`${item.id} + ${i}`"
            :src="item.src"
          >
            <v-row class="w-100 h-100" style="align-content: center;">
              <v-col cols="1" class="pa-0"></v-col>
              <v-col cols="5" class="px-0">
                <div>
                  <v-btn class="primary" depressed rounded>xtel</v-btn>
                  <div class="white--text font-weight-bold fs-24 pb-1 pt-2">
                    {{ item.title }}
                  </div>
                  <div class="white--text pb-2 fs-16">{{ item.conter }}</div>
                  <v-btn class="success" depressed rounded
                    >Xem thêm
                    <span>
                      <v-icon>mdi-chevron-right</v-icon>
                    </span></v-btn
                  >
                </div>
              </v-col>
              <v-col cols="6"></v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <div class="custom_my">
          <div class="background_custom">
            <v-row class="text-center">
              <v-col cols="12">
                <div
                  class="d-flex"
                  style="
    align-items: center;
    width: 100%;
    justify-content: center;"
                >
                  <div class="style-border-custom"></div>
                  <div class="text-uppercase fs-14 pl-2 font-weight-medium">
                    where we services
                  </div>
                </div>
                <div
                  class="primary--text text-uppercase font-weight-medium fs-24 "
                >
                  Khách hàng của chúng tôi
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col offset="2" cols="8">
                <v-carousel cycle hide-delimiters height="50">
                  <v-carousel-item>
                    <v-row class="pa-0 justify-center">
                      <v-col
                        cols="12"
                        md="auto"
                        class="py-0 "
                        v-for="item in itemsLogo"
                        :key="item.id"
                      >
                        <v-img width="130" height="50" :src="item.src"></v-img>
                      </v-col>
                    </v-row>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
          </div>
          <div class="background_custom">
            <v-row class="text-center">
              <v-col cols="12">
                <div
                  class="d-flex"
                  style="
    align-items: center;
    width: 100%;
    justify-content: center;"
                >
                  <div class="style-border-custom"></div>
                  <div class="text-uppercase fs-14 pl-2 font-weight-medium">
                    where we services
                  </div>
                </div>
                <div
                  class="primary--text text-uppercase font-weight-medium fs-24 "
                >
                  Dịch vụ
                </div>
              </v-col>
            </v-row>
          </div>

          <div>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10" class="pb-0">
                <v-row>
                  <v-col cols="5">
                    <div
                      class="d-flex"
                      style="width: 100%; align-items: center;"
                    >
                      <div class="style-border-custom"></div>
                      <div
                        class="text-uppercase fs-14 pl-2 font-weight-medium pt-1"
                      >
                        where we services
                      </div>
                    </div>
                    <div
                      class="primary--text text-uppercase font-weight-medium fs-24 pt-1 "
                    >
                      Offshore Development
                    </div>
                    <div class="pt-1">
                      Labo là hình thức phát triển Offshore rất được ưa chuộng
                      hiện nay. Phát triển theo hình thức này, sẽ tận dụng và
                      phát huy tối đa hiệu quả nhân lực, giúp khách hàng kiểm
                      soát tốt chi phí. Xtel HOLDINGS cung cấp nhiều loại hình
                      Labo khác nhau tùy thuộc vào đặc tính dự án của từng khách
                      hàng
                    </div>
                    <div class="pt-2 ">
                      <v-btn class="success" smail depressed rounded
                        >Xem thêm
                        <span>
                          <v-icon>mdi-chevron-right</v-icon>
                        </span></v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="7">
                    <v-img src="/image/image.png"></v-img>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1">
                <div class="pt-2">
                  <v-img src="/image/image1.png" width="70px"></v-img>
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col cols="1" class="d-flex" style="justify-content: end;">
                <div class="pt-2">
                  <v-img src="/image/image1.png" width="70px"></v-img>
                </div>
              </v-col>
              <v-col cols="10" class="pt-0">
                <v-row>
                  <v-col cols="4" v-for="item in itemsServer" :key="item.id">
                    <v-card
                      outlined
                      dense
                      style="border-radius:30px; height: 18rem; border: 1px solid #0381C3"
                    >
                      <v-card-text>
                        <div class="text-center">
                          <div class="d-flex pt-5 pb-4">
                            <v-img :src="item.icon" height="45"></v-img>
                          </div>
                          <div
                            class="font-weight-bold black--text fs-18 
                          py-2"
                          >
                            {{ item.title }}
                          </div>
                          <div class="black--text fs-14 font-weight-medium">
                            {{ item.content }}
                          </div>
                          <div class="py-5">
                            <v-btn small class="success" depressed rounded
                              >Xem thêm
                              <span>
                                <v-icon>mdi-chevron-right</v-icon>
                              </span></v-btn
                            >
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
          </div>
          <div class="primary">
            <v-row class="py-10">
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-row>
                  <v-col cols="3" v-for="item in itemsTotalData" :key="item.id">
                    <div class="text-center">
                      <div class="d-flex">
                        <v-img :src="item.icon" height="50"></v-img>
                      </div>
                      <div
                        class="font-weight-bold fs-22 white--text pd-t-30 pd-b-20"
                      >
                        {{ item.numberData }}
                      </div>
                      <div class="white--text fs-14">{{ item.content }}</div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="d-flex" style="justify-content: end;">
                <div class="pr-2" style="opacity: 0.5;">
                  <v-img src="/image/image3.png" width="50px"></v-img>
                </div>
              </v-col>
            </v-row>
          </div>
          <div>
            <div class="background_custom">
              <v-row class="text-center">
                <v-col cols="12">
                  <div
                    class="d-flex"
                    style="
    align-items: center;
    width: 100%;
    justify-content: center;"
                  >
                    <div class="style-border-custom"></div>
                    <div class="text-uppercase fs-14 pl-2 font-weight-medium">
                      where we services
                    </div>
                  </div>
                  <div
                    class="primary--text text-uppercase font-weight-medium fs-24 "
                  >
                    Thành tích
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <div>
            <v-row>
              <v-col cols="1" class="pb-0"></v-col>
              <v-col cols="10" class="pb-0 px-0">
                <v-row>
                  <v-col cols="2"> </v-col>
                  <v-col cols="8" align="center" class="pb-0">
                    <v-btn
                      @click="clickOffshore(1)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        offshore === 1
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >Offshore</v-btn
                    >
                    <v-btn
                      @click="clickOffshore(2)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        offshore === 2
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >System/Applicatinon</v-btn
                    >
                    <v-btn
                      @click="clickOffshore(3)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        offshore === 3
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >Blockchain</v-btn
                    >
                  </v-col>
                  <v-col cols="4"> </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="pb-0"></v-col>
            </v-row>
            <v-row>
              <v-col cols="1" class="pt-0"></v-col>

              <v-col cols="10" class="pt-0 px-0">
                <openOffshore></openOffshore>
              </v-col>

              <v-col cols="1" class="pt-0"></v-col>
            </v-row>
          </div>
          <div>
            <div class="background_custom">
              <v-row class="text-center">
                <v-col cols="12">
                  <div
                    class="d-flex"
                    style="
    align-items: center;
    width: 100%;
    justify-content: center;"
                  >
                    <div class="style-border-custom"></div>
                    <div class="text-uppercase fs-14 pl-2 font-weight-medium">
                      where we services
                    </div>
                  </div>
                  <div
                    class="primary--text text-uppercase font-weight-medium fs-24 "
                  >
                    Chứng chỉ
                  </div>
                </v-col>
              </v-row>
            </div>
            <div>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                  <v-carousel cycle hide-delimiters height="50">
                    <v-row class="pa-0 justify-center">
                      <v-col
                        cols="12"
                        md="3"
                        class="py-0 d-flex"
                        v-for="item in itemsLogo"
                        :key="item.id"
                      >
                        <v-img width="130" height="50" :src="item.src"></v-img>
                      </v-col>
                    </v-row>
                  </v-carousel>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </div>
          </div>
          <div>
            <div class="background_custom">
              <v-row class="text-center">
                <v-col cols="12">
                  <div
                    class="d-flex"
                    style="
    align-items: center;
    width: 100%;
    justify-content: center;"
                  >
                    <div class="style-border-custom"></div>
                    <div class="text-uppercase fs-14 pl-2 font-weight-medium">
                      where we services
                    </div>
                  </div>
                  <div
                    class="primary--text text-uppercase font-weight-medium fs-24 "
                  >
                    Thông báo sự kiện
                  </div>
                </v-col>
              </v-row>
            </div>
            <v-row>
              <v-col cols="1" class="pb-0"></v-col>
              <v-col cols="10" class="pb-0">
                <v-row>
                  <v-col align="center">
                    <v-btn
                      @click="clickevents(1)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 1
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >Tất cả</v-btn
                    >
                    <v-btn
                      @click="clickevents(2)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 2
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >X-Customer</v-btn
                    >
                    <v-btn
                      @click="clickevents(3)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 3
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >X-Journal</v-btn
                    >
                    <v-btn
                      @click="clickevents(4)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 4
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >X-News</v-btn
                    >
                    <v-btn
                      @click="clickevents(5)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 5
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >X-Life</v-btn
                    >
                    <v-btn
                      @click="clickevents(6)"
                      rounded
                      depressed
                      class="custom-button-achievements text-none fs-14 mr-2"
                      :class="
                        all === 6
                          ? 'custom-button-active '
                          : 'custom-button-achievements  mr-2'
                      "
                      >X-Tube</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="pb-0"></v-col>
            </v-row>
            <v-row>
              <v-col cols="1" class="pt-0"></v-col>
              <v-col cols="10" class="px-0 pt-0">
                <Shared :items="itemsBanner" :data="all"></Shared>
              </v-col>
              <v-col cols="1" class="pt-0"></v-col>
            </v-row>
          </div>
          <div class="success white--text font-weight-medium py-10 text-center">
            <div class="fs-28 ">
              Developing Therapies for Auto Immune Diseases
            </div>
            <div class="fs-20 py-5 text-uppercase">
              Machine learning based platform
            </div>
            <div>
              <v-btn
                depressed
                color="white"
                class="success--text"
                style="font-size:25px; border-radius:15px"
                width="365"
                height="65"
              >
                contact us
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import openOffshore from '~/components/tab/offShore.vue'
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-x-transition'
    }
    return 'slide-x-reverse-transition'
  },
  components: {
    openOffshore
  },
  data() {
    return {
      offshore: 1,
      all: 1,
      itemsOffshore: [
        {
          image: '/banner/Image1.png',
          title: 'Blockchain Consultancy',
          content: 'Offshore development maxlmlzes the merits of overseas'
        },
        {
          image: '/banner/Image1.png',
          title: 'Offshore Development',
          content: 'Offshore development maxlmlzes the merits of overseas'
        },
        {
          image: '/banner/Image2.png',
          title: 'System/Applicatinon Development',
          content: 'Offshore development maxlmlzes the merits of overseas'
        }
      ],
      items: [
        {
          src: '/banner/banner.png',
          title: 'Tư vấn & phát triển Blockchain',
          conter:
            'Xtel GLOBAL cung cấp nền tảng blockchain công khai cũng như hỗ trợ phát triển blockchain riêng tư. Nếu bạn đang tìm kiếm một sự an toàn, mạnh mẽ và cơ sở dữ liệu chống giả mạo, vui lòng giao cho Xtel GLOBAL'
        }
      ],
      itemsLogo: [
        {
          src: '/banner/banner.png'
        },
        {
          src: '/banner/banner.png'
        },
        {
          src: '/banner/banner.png'
        },
        {
          src: '/banner/banner.png'
        },
        {
          src: '/banner/banner.png'
        },
        {
          src: '/banner/banner.png'
        }
      ],
      itemsTotalData: [
        {
          icon: '/icon/icon6.png',
          numberData: '500+',
          content: 'Khách hàng hài lòng'
        },
        {
          icon: '/icon/icon7.png',
          numberData: '100+',
          content: 'Dự án hoàn thành'
        },
        {
          icon: '/icon/icon8.png',
          numberData: '500+',
          content: 'Nhân viên'
        },
        {
          icon: '/icon/icon9.png',
          numberData: '10+',
          content: 'Giải thưởng'
        }
      ],
      itemsServer: [
        {
          icon: '/icon/icon.png',
          title: 'Phát triển theo hình thức Labo',
          content:
            'Labo là hình thức phát triển Offshore rất được ưa chuộng hiện nay. Phát triển theo hình thức này, ...'
        },
        {
          icon: '/icon/icon1.png',
          title: 'Phát triển hệ thống',
          content:
            'XTEL HOLDINGS chyên tư vấn và phát triển từ website đến các hệ thống cốt lõi, hệ thống nghiệp vụ khác nhau theo yêu cầu của khách hàng'
        },
        {
          icon: '/icon/icon2.png',
          title: 'Phát triển ứng dụng mobile',
          content:
            'XTEL HOLDINGS có nhiều kinh nghiệm phát triển các ứng dụng IOS và Android trong đa dạng các lĩnh vực như y tế, giáo dục, tài chính, media...'
        },
        {
          icon: '/icon/icon3.png',
          title: 'Thiết kế đồ họa',
          content:
            'XTEL HOLDINGS chyên tư vấn và phát triển từ website đến các hệ thống cốt lõi, hệ thống nghiệp vụ khác nhau theo yêu cầu của khách hàng'
        },
        {
          icon: '/icon/icon4.png',
          title: 'Digital Marleting',
          content:
            'XTEL HOLDINGS chyên tư vấn và phát triển từ website đến các hệ thống cốt lõi, hệ thống nghiệp vụ khác nhau theo yêu cầu của khách hàng'
        },
        {
          icon: '/icon/icon5.png',
          title: 'Dịch vụ VAS',
          content:
            'XTEL HOLDINGS có nhiều kinh nghiệm phát triển các ứng dụng IOS và Android trong đa dạng các lĩnh vực như y tế, giáo dục, tài chính, media...'
        }
      ],
      itemsBanner: {
        listData: [
          {
            image: '/banner/Image.png',
            title: 'Blockchain Consultancy',
            content: 'Offshore development maxlmlzes the merits of overseas'
          },
          {
            image: '/banner/Image1.png',
            title: 'Offshore Development',
            content: 'Offshore development maxlmlzes the merits of overseas'
          },
          {
            image: '/banner/Image2.png',
            title: 'System/Applicatinon Development',
            content: 'Offshore development maxlmlzes the merits of overseas'
          },
          {
            image: '/banner/Image.png',
            title: 'Blockchain Consultancy',
            content: 'Offshore development maxlmlzes the merits of overseas'
          },
          {
            image: '/banner/Image1.png',
            title: 'Offshore Development',
            content: 'Offshore development maxlmlzes the merits of overseas'
          },
          {
            image: '/banner/Image2.png',
            title: 'System/Applicatinon Development',
            content: 'Offshore development maxlmlzes the merits of overseas'
          }
        ],
        totalData: {
          listDataHot: [
            {
              image: '/banner/Image1.png',
              title: 'Blockchain Consultancy',
              content: 'Offshore development maxlmlzes the merits of overseas'
            },
            {
              image: '/banner/Image1.png',
              title: 'Offshore Development',
              content: 'Offshore development maxlmlzes the merits of overseas'
            }
          ],
          listData: [
            {
              image: '/banner/Image1.png',
              title: 'Blockchain Consultancy',
              content: 'Offshore development maxlmlzes the merits of overseas'
            },
            {
              image: '/banner/Image1.png',
              title: 'Offshore Development',
              content: 'Offshore development maxlmlzes the merits of overseas'
            },
            {
              image: '/banner/Image2.png',
              title: 'System/Applicatinon Development',
              content: 'Offshore development maxlmlzes the merits of overseas'
            }
          ]
        }
      }
    }
  },
  computed: {
    ...mapState({
      checkLanguage: state => state.app.checkLanguage
    }),
    breakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mobile'
        case 'sm':
          return 'mobile'
        case 'md':
          return 'desktop'
        case 'lg':
          return 'desktop'
        case 'xl':
          return 'desktop'
      }
    }
  },
  mounted() {
    if (this.offshore === 1) {
    }
  },
  methods: {
    clickevents(value) {
      if (value === 1) {
        this.all = 1
      }
      if (value === 2) {
        this.all = 2
      }
      if (value === 3) {
        this.all = 3
      }
      if (value === 4) {
        this.all = 4
      }
      if (value === 5) {
        this.all = 5
      }
      if (value === 6) {
        this.all = 6
      }
    },
    clickOffshore(value) {
      if (value === 1) {
        this.offshore = 1
      }
      if (value === 2) {
        this.offshore = 2
      }
      if (value === 3) {
        this.offshore = 3
      }
    }
  },

  watch: {
    checkLanguage(value) {}
  }
}
</script>
<style lang="scss">
// .main_body{
//   background-image: ;
// }
.main_body {
  .style-border-custom {
    height: 5px;
    width: 40px;
    border: 1px solid #0381c3;
    background-color: #0381c3;
  }
  .custom-active-icon {
    .v-btn--active {
      i {
        color: #3d713f !important;
        opacity: 1;
      }
    }
  }
  .custom_my {
    background-color: white !important;
    .background_custom {
      background-color: #f5f5f5 !important;

      .style-border-custom {
        height: 5px;
        width: 40px;
        border: 2px solid #0381c3;
        background-color: #0381c3;
      }
    }
  }
  .v-image__image--cover {
    background-size: contain;
  }
  .custom-button-achievements {
    background-color: #e2e1e1 !important;
    &.custom-button-active {
      background-color: #0da319 !important;
      color: white !important;
    }
  }
  .theme--dark.v-btn.v-btn--icon {
    color: #0da319 !important;
  }
}
</style>
