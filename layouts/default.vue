<template>
  <v-app
    :class="breakpoint === 'desktop' ? 'main-default' : 'main-default-mobile'"
  >
    <div class="background-image"></div>
    <!-- <div class="overlay"></div> -->
    <client-only>
      <notifications
        group="main"
        :duration="7000"
        position="top right"
        :max="5"
      />
    </client-only>
    <v-navigation-drawer
      v-model="drawer"
      width="50%"
      app
      fixed
      right
      light
      style="padding-bottom: 54px"
      class="denser-nav d-md-none"
      height="100%"
    >
      <v-list nav dense flat expand class="disabled-active">
        <template v-for="(item, index) in topmenu">
          <v-list-group
            :key="index"
            :value="true"
            no-action
            v-if="item.children !== undefined && item.children.length > 0"
            append-icon="mdi-menu-down"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $vuetify.lang.t('$vuetify.menu.' + item.page_name) }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child1, i) in item.children"
              :key="i"
              :to="child1.page_url"
              router
            >
              <v-list-item-title
                class="pt-1"
                v-text="$vuetify.lang.t('$vuetify.menu.' + item.page_name)"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="index"
            :to="item.page_url"
            router
            active-class="primary--text"
          >
            <v-list-item-title
              v-text="$vuetify.lang.t('$vuetify.menu.' + item.page_name)"
            ></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      height="50px"
      light
      elevate-on-scroll
      z-index="15"
      :color="scrollTop > 0 ? '#123f6d' : 'transparent'"
    >
      <v-toolbar-title class="align-center d-flex">
        <v-btn large icon to="">
          <v-img src="/logo/logoXtel.png" width="40" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-hover v-slot:default="{}">
        <v-btn
          tile
          :class="'mb-2   custom-button mx-4 d-none d-md-block'"
          text
          active-class="custom-button-active"
          to="/"
          :ripple="false"
          ><span><v-icon>mdi-home</v-icon></span>
          {{ $vuetify.lang.t('$vuetify.menu.Home') }}</v-btn
        >
      </v-hover>
      <v-menu offset-y persistent transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="openMenuVPeople"
            tile
            :class="'mb-3 custom-button ml-4 d-none d-md-block'"
            text
            v-bind="attrs"
            v-on="on"
            :ripple="false"
            >{{ $vuetify.lang.t('$vuetify.menu.VPeople') }}

            <span class="d-none d-sm-block">
              <v-btn x-small @click="openMenuVPeople" icon fab>
                <v-icon class="success--text">{{
                  show ? 'mdi-menu-up' : 'mdi-menu-down'
                }}</v-icon>
              </v-btn></span
            >
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <div style="width: 250px;">
              <v-row>
                <v-col cols="6" v-for="item in 10" :key="item" class="pa-2">
                  <v-list-item-title
                    ><a href="#" class="text-decoration-none">
                      menu{{ item }}</a
                    ></v-list-item-title
                  >
                </v-col>
              </v-row>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y persistent transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="openMenuWhyChoose"
            tile
            :class="'mb-3 custom-button ml-4 d-none d-md-block'"
            text
            v-bind="attrs"
            v-on="on"
            to=""
            :ripple="false"
            >{{ $vuetify.lang.t('$vuetify.menu.WhyChoose') }}

            <span class="d-none d-md-block">
              <v-btn x-small @click="openMenuWhyChoose" icon fab>
                <v-icon class="success--text">{{
                  showChoose ? 'mdi-menu-up' : 'mdi-menu-down'
                }}</v-icon>
              </v-btn></span
            >
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <div style="width: 250px;">
              <v-row>
                <v-col cols="6" v-for="item in 10" :key="item" class="pa-2">
                  <v-list-item-title
                    ><a href="#" class="text-decoration-none">
                      menu{{ item }}</a
                    ></v-list-item-title
                  >
                </v-col>
              </v-row>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-hover v-slot:default="{}">
        <v-btn
          tile
          :class="'mb-2 custom-button mx-4 d-none d-md-block'"
          text
          active-class="custom-button-active"
          to=""
          :ripple="false"
          >{{ $vuetify.lang.t('$vuetify.menu.RecruitmentProcess') }}</v-btn
        >
      </v-hover>

      <v-hover v-slot:default="{}">
        <v-btn
          tile
          :class="'mb-2  custom-button mx-4 d-none d-md-block'"
          text
          active-class="custom-button-active"
          to=""
          :ripple="false"
          >{{ $vuetify.lang.t('$vuetify.menu.HotJobs') }}</v-btn
        >
      </v-hover>

      <v-hover v-slot:default="{}">
        <v-btn
          tile
          :class="'mb-2 custom-button mx-4 d-none d-md-block'"
          text
          active-class="custom-button-active"
          to=""
          :ripple="false"
          >{{ $vuetify.lang.t('$vuetify.menu.Contact') }}</v-btn
        >
      </v-hover>
      <v-menu v-model="showMenu" absolute offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-small class="mx-3">
            <v-avatar size="24px">
              <img
                align="start"
                v-on="on"
                :src="
                  $vuetify.lang.current === 'vi'
                    ? '/logo/vi_flag.png'
                    : '/logo/co_anh.png'
                "
              />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="changeLanguage(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-md-none white--text"
      />
    </v-app-bar>
    <v-content v-scroll="onScrollContent">
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <!-- footer -->

    <v-footer class="main-footer">
      <container>
        <v-row v-if="breakpoint === 'desktop'">
          <v-col cols="1"></v-col>
          <v-col cols="10" class="fs-16">
            <v-row class="list-unstyled">
              <v-col cols="2">
                <v-img src="/logo/logoXtel.png" width="80" />
              </v-col>
              <v-col cols="4">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14 ">
                    services
                  </div>

                  <div>
                    <a href="#">
                      Offshore development
                    </a>
                  </div>

                  <div>
                    <a href="#"> System/Application development</a>
                  </div>

                  <div>
                    <a href="#"> Blockchain Consulting and Development</a>
                  </div>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14">
                    Company
                  </div>

                  <div>
                    <a href="#">
                      About Us
                    </a>
                  </div>

                  <div>
                    <a href="#"> CEO's Greeting</a>
                  </div>

                  <div>
                    <a href="#"> Vision - Mission</a>
                  </div>

                  <div>
                    <a href="#">Address</a>
                  </div>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14">
                    Contact
                  </div>
                  <a href="#">Contact</a>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="12">
            <v-row class="info-contact">
              <v-col cols="8"></v-col>
              <v-col cols="4">
                <v-row>
                  <v-col cols="12" class="py-0">
                    <div style="color:#8D8C8C">
                      <div class="d-flex pt-2" style="align-items:center">
                        <v-icon size="30" style="color:#8D8C8C"
                          >mdi-home-outline</v-icon
                        >
                        <div class="pl-2 fs-14">
                          Số 15 Ngõ 82, Dịch Vọng Hậu, Hà Nội
                        </div>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="4" class="py-0 pr-0">
                    <div class="d-flex pt-2" style="align-items:center">
                      <v-icon size="30" style="color:#8D8C8C"
                        >mdi-phone-outline</v-icon
                      >
                      <div class="pl-2 fs-14">
                        <a href="tel:0325505511"> (+84)35.889.999</a>
                      </div>
                    </div>
                    <div class="d-flex pt-2" style="align-items:center">
                      <v-icon size="30" style="color:#8D8C8C"
                        >mdi-email-outline</v-icon
                      >
                      <div class="pl-2 fs-14">
                        <a href="mailto:info@xtel.vn">info@xtel.vn</a>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="8" class=" pb-0"
                    ><iframe
                      max-width="100%"
                      width="250px"
                      max-height="100%"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0785925946757!2d105.78277231429784!3d21.029541093128977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cf55cbf6b%3A0x6ed54091a6cad02c!2zMTUgTmfDtSA4MiBE4buLY2ggVuG7jW5nIEjhuq11LCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1640684046531!5m2!1svi!2s"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe
                  ></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pt-10">
            <div class="success--text text-center fs-14">
              Copyright © 2021 XTEL All Rights Reserved.
            </div>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" class="fs-16 py-0">
            <v-row class="list-unstyled">
              <v-col cols="12">
                <v-img src="/logo/logoXtel.png" width="80" />
              </v-col>
              <v-col cols="12">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14 ">
                    services
                  </div>

                  <div>
                    <a href="#">
                      Offshore development
                    </a>
                  </div>

                  <div>
                    <a href="#"> System/Application development</a>
                  </div>

                  <div>
                    <a href="#"> Blockchain Consulting and Development</a>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" class="pt-0">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14">
                    Company
                  </div>

                  <div>
                    <a href="#">
                      About Us
                    </a>
                  </div>

                  <div>
                    <a href="#"> CEO's Greeting</a>
                  </div>

                  <div>
                    <a href="#"> Vision - Mission</a>
                  </div>

                  <div>
                    <a href="#">Address</a>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" class="pt-0">
                <div>
                  <div class="text-uppercase pb-2 white--text fs-14">
                    Contact
                  </div>
                  <a href="#">Contact</a>
                </div>
              </v-col>

              <v-divider></v-divider>
              <v-col cols="12" class="py-0">
                <div style="color:#8D8C8C">
                  <div class="d-flex pt-2" style="align-items:center">
                    <v-icon size="30" style="color:#8D8C8C"
                      >mdi-home-outline</v-icon
                    >
                    <div class="pl-2 fs-14">
                      Số 15 Ngõ 82, Dịch Vọng Hậu, Hà Nội
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="4" class="py-0 pr-0">
                <div class="d-flex pt-2" style="align-items:center">
                  <v-icon size="30" style="color:#8D8C8C"
                    >mdi-phone-outline</v-icon
                  >
                  <div class="pl-2 fs-14">
                    <a href="tel:0325505511"> (+84)35.889.999</a>
                  </div>
                </div>
                <div class="d-flex pt-2" style="align-items:center">
                  <v-icon size="30" style="color:#8D8C8C"
                    >mdi-email-outline</v-icon
                  >
                  <div class="pl-2 fs-14">
                    <a href="mailto:info@xtel.vn">info@xtel.vn</a>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" class=" pb-0"
                ><iframe
                  max-width="100%"
                  max-height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0785925946757!2d105.78277231429784!3d21.029541093128977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cf55cbf6b%3A0x6ed54091a6cad02c!2zMTUgTmfDtSA4MiBE4buLY2ggVuG7jW5nIEjhuq11LCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1640684046531!5m2!1svi!2s"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe
              ></v-col>
            </v-row>
          </v-col>
        </v-row>
      </container>
    </v-footer>
    <!-- <go-top
      bg-color="#3d713f"
      :bottom-gap="75"
      :max-width="100"
      :size="50"
      :z-index="1000"
      :has-outline="false"
    ></go-top> -->
  </v-app>
</template>

<script>
import '~/assets/table.scss'
import Cookies from 'js-cookie'
import ULT from '~/plugins/ult'
import APIs from '~/assets/configurations/API_Config'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      test: null,
      drawer: false,
      showChoose: false,
      scrollTop: 0,
      showMenu: false,
      menuVPeople: false,
      info: null,
      listMenu: [],
      listUrl: [],
      page: 1,
      show: false,
      items: [
        { title: 'Việt Nam', value: 'vi' },
        { title: 'English', value: 'en' }
      ],

      topmenu: [
        {
          page_name: 'Home',
          page_url: '/',
          page_icon: 'mdi-home'
        },
        {
          page_name: 'VPeople',
          page_url: '',

          children: [
            {
              page_name: 'VPeople'
            }
          ]
        },
        {
          page_name: 'WhyChoose',
          page_url: '',

          children: []
        },
        {
          page_name: 'RecruitmentProcess',
          page_url: ''
        },
        {
          page_name: 'HotJobs',
          page_url: ''
        },
        {
          page_name: 'Contact',
          page_url: ''
        }
      ]
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
        default:
          return 'desktop'
      }
    }
  },
  methods: {
    // menu con
    openMenuVPeople() {
      this.show = !this.show
      this.menuVPeople = !this.menuVPeople
    },
    openMenuWhyChoose() {
      this.showChoose = !this.showChoose
    },
    onScrollContent(e) {
      this.scrollTop = e.target.scrollingElement.scrollTop
    },
    changeLanguage(language_id) {
      this.$vuetify.lang.current = language_id.value
      if (language_id.value == 'vi') {
        this.$store.dispatch('app/setLanguage', 1)
        // this.pageInfor()
      } else {
        this.$store.dispatch('app/setLanguage', 2)
        // this.pageInfor()
      }
    },
    // pageInfor() {
    //   const data = {
    //     lang_id: this.checkLanguage
    //   }
    //   this.$pageInfor(data).then(response => {
    //     this.info = response.data.data
    //   })
    // },
    // footerPage() {
    //   const data = {
    //     page_index: this.page,
    //     page_size: 8,
    //     lang_id: this.checkLanguage
    //   }
    //   this.$footerPage(data).then(response => {
    //     for (let i = 0; i < response.data.data.items.length; i++) {
    //       this.listMenu.push(response.data.data.items[i].name)
    //     }
    //   })
    // },
    contactList() {
      this.$contactList().then(response => {
        for (let i = 0; i < response.data.data.length; i++) {
          this.listUrl.push(response.data.data[i].url)
        }
      })
    }
  },

  watch: {
    checkLanguage(value) {
      this.listMenu = []
      // this.footerPage()
    }
  }
}
</script>
// desktop
<style lang="scss">
.main-default {
  .v-toolbar__content {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .v-list-item__icon {
    margin-right: 20px !important;
  }

  .v-application--is-ltr
    .v-list--dense.v-list--nav
    .custom-group.v-list-group--no-action
    > .v-list-group__items
    > div
    > .v-list-item {
    padding-left: 50px !important;
  }

  .v-application--is-ltr
    .v-list--dense
    .v-list-group--sub-group
    .v-list-group__header {
    padding-left: 6px;
  }
  .v-list-item--active {
    background-color: white;
  }
  .main-footer {
    background-image: url(/banner/footer.png) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    width: 100%;
    .list-unstyled {
      a {
        text-decoration: none;
        color: #7c7a7b !important;
        &:hover {
          color: white !important;
          text-decoration: underline;
        }
      }
    }
    .info-contact {
      a {
        text-decoration: none;
        color: #7c7a7b !important;
        &:hover {
          color: white !important;
          text-decoration: underline;
        }
      }
    }
  }

  .background-image {
    overflow-y: hidden;
    overflow-x: hidden;
    background-image: url(/banner/banner.png) !important;
    background-position: top !important;
    height: 50px !important;
    position: fixed;
    width: 100%;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100%;
    background: black;
    opacity: 0.4;
  }

  // .custom-button-click {
  //   color: white !important;

  //   &::before {
  //     opacity: 0 !important;
  //   }

  //   border-radius: 0px;
  //   padding: 0 !important;
  //   padding-top: 10px !important;

  //   &.custom-button-active {
  //     color: #0da319 !important;
  //     border-bottom: 2px solid;
  //   }
  // }

  .custom-button {
    color: white !important;

    &::before {
      opacity: 0 !important;
    }

    border-radius: 0px;
    padding: 0 !important;
    padding-top: 10px !important;

    // &:hover {
    //   color: #0da319 !important;
    //   border-bottom: 2px solid;
    // }

    &.custom-button-active {
      color: #0da319 !important;
      border-bottom: 2px solid;
    }
  }
  .v-application a {
    color: white !important;
  }
  .style-footer-desktop {
    .text-decoration {
      text-decoration: none;
    }
    .display {
      color: white !important;
    }
    .style-foter-text-call-now {
      font-size: 18px;
      font-weight: bold;
    }

    .v-sheet {
      border-radius: 0px !important;
    }
    .font-size-12 {
      font-size: 12px;
    }
    .font-size-16 {
      font-size: 16px;
    }

    .font-size-address {
      font-size: 12px;
    }
  }
  .style-footer-mobile {
    .text-decoration {
      text-decoration: none;
      font-size: 14px;
    }

    .font-size-address {
      font-size: 12px;
    }
    .border-radius-0 {
      border-radius: 0px !important;
    }
    .style-foter-text-call-now {
      font-weight: bold;
      font-size: 14px !important;
      text-align: center !important;
    }

    .display {
      color: white;
      font-size: 10px;
    }
    .can-giua {
      text-align: center;
    }
    .font-size-12 {
      font-size: 14px;
    }
    .style-footer-desktop {
      z-index: 12 !important;
    }
  }
}
</style>

// mobile
<style lang="scss" scoped>
.main-default-mobile {
  .v-list-item__icon {
    margin-right: 20px !important;
  }

  .v-application--is-ltr
    .v-list--dense.v-list--nav
    .custom-group.v-list-group--no-action
    > .v-list-group__items
    > div
    > .v-list-item {
    padding-left: 50px !important;
  }

  .v-application--is-ltr
    .v-list--dense
    .v-list-group--sub-group
    .v-list-group__header {
    padding-left: 6px;
  }

  .v-list-item--active {
    background-color: white;
  }
  .main-footer {
    background-image: url(/banner/footer.png) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    width: 100%;
    .list-unstyled {
      a {
        text-decoration: none;
        color: #7c7a7b !important;
        &:hover {
          color: white !important;
          text-decoration: underline;
        }
      }
    }
    .info-contact {
      a {
        text-decoration: none;
        color: #7c7a7b !important;
        &:hover {
          color: white !important;
          text-decoration: underline;
        }
      }
    }
  }

  .background-image {
    overflow-y: hidden;
    overflow-x: hidden;
    background-image: url(/banner/banner.png) !important;
    background-position: top !important;
    height: 50px !important;
    position: fixed;
    width: 100%;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  // .overlay {
  //   position: absolute;
  //   width: 100vw;
  //   height: 100%;
  //   background: black;
  //   opacity: 0.4;
  // }

  .custom-button {
    color: white !important;

    &::before {
      opacity: 0 !important;
    }

    border-radius: 0px;
    padding: 0 !important;
    padding-top: 10px !important;

    &:hover {
      color: #0da319 !important;
      border-bottom: 2px solid;
    }

    &.custom-button-active {
      color: #0da319 !important;
      border-bottom: 2px solid;
    }
  }
  .v-application a {
    color: white !important;
  }
  .style-footer-desktop {
    .text-decoration {
      text-decoration: none;
    }
    .display {
      color: white !important;
    }
    .style-foter-text-call-now {
      font-size: 18px;
      font-weight: bold;
    }

    .v-sheet {
      border-radius: 0px !important;
    }
    .font-size-12 {
      font-size: 12px;
    }
    .font-size-16 {
      font-size: 16px;
    }

    .font-size-address {
      font-size: 12px;
    }
  }
  .style-footer-mobile {
    .text-decoration {
      text-decoration: none;
      font-size: 14px;
    }

    .font-size-address {
      font-size: 12px;
    }
    .border-radius-0 {
      border-radius: 0px !important;
    }
    .style-foter-text-call-now {
      font-weight: bold;
      font-size: 14px !important;
      text-align: center !important;
    }

    .display {
      color: white;
      font-size: 10px;
    }
    .can-giua {
      text-align: center;
    }
    .font-size-12 {
      font-size: 14px;
    }
    .style-footer-desktop {
      z-index: 12 !important;
    }
  }
}
</style>
