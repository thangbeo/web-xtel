<template>
  <div
    :class="
      breakpoint === 'desktop'
        ? 'main-carousel-offshore'
        : 'main-carousel-offshore-mobile'
    "
  >
    <v-carousel
      light
      hide-delimiter-background
      :show-arrows="false"
      class="custom-active-icon"
      height="100%"
    >
      <v-carousel-item>
        <container>
          <v-row v-if="breakpoint === 'desktop'">
            <v-col
              cols="4"
              class="pt-0"
              v-for="(item, i) in items"
              :key="`${item.id} + ${i}`"
            >
              <v-img :src="item.image" width="100%">
                <div class="h-100" style="display: flex; align-items: end; ">
                  <v-card-text>
                    <v-row>
                      <v-col md="8" class="pl-1">
                        <div
                          class="fs-20 font-weight-bold white--text text-truncate"
                        >
                          {{ item.title }}
                        </div>
                      </v-col>
                      <v-col md="4" class="pl-0">
                        <div>
                          <v-btn small class="success" depressed rounded
                            >Xem thêm
                            <span>
                              <v-icon>mdi-chevron-right</v-icon>
                            </span></v-btn
                          >
                        </div>
                      </v-col>
                      <v-col cols="12" class="py-0 pl-1">
                        <div class="fs-13 white--text">{{ item.content }}</div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </div>
              </v-img>
            </v-col>
          </v-row>
          <v-container v-else class="pt-0">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              justify-sm="start"
            >
              <v-col
                cols="12"
                sm="6"
                class="pt-0"
                v-for="(item, i) in items"
                :key="`${item.id} + ${i}`"
              >
                <v-img :src="item.image" width="100%">
                  <div class="h-100 align-items-center d-flex">
                    <v-card-text class="pb-0 ">
                      <v-row>
                        <v-col md="12" class="pl-1 pt-3">
                          <div
                            class="fs-24 font-weight-bold white--text text-truncate"
                          >
                            {{ item.title }}
                          </div>
                        </v-col>

                        <v-col cols="12" class="py-0 pl-1">
                          <div class="fs-18 white--text">
                            {{ item.content }}
                          </div>
                        </v-col>
                        <v-col cols="12" class="pl-0 ">
                          <div>
                            <v-btn class="success" depressed rounded
                              >Xem thêm
                              <span>
                                <v-icon>mdi-chevron-right</v-icon>
                              </span></v-btn
                            >
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </div>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
  data() {
    return {
      items: [
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
</script>
//desktop
<style lang="scss">
.main-carousel-offshore {
  .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 0 !important;
  }
  .v-item-group {
    // height: 100%;
    // width: 100%;
    .v-carousel__controls {
      align-items: center;
      background-color: none;
      text-align: center;
      bottom: 0;
      display: -webkit-box;
      display: flex;
      height: 15px;
      -webkit-box-pack: center;
      justify-content: center;
      list-style-type: none;
      position: relative !important;
      width: 100%;
      z-index: 1;
    }
  }
  .v-btn--icon.v-size--small .v-icon,
  .v-btn--fab.v-size--small .v-icon {
    font-size: 15px !important;
    color: rgba(0, 0, 0, 0.54);
  }
  .theme--light.v-btn.v-btn--icon {
    &::before {
      opacity: 0;
    }
  }
  .v-carousel__controls__item {
    margin: 0 auto;
  }
  .v-window__prev,
  .v-window__next {
    background-color: #ffffff;
    color: #000000;
  }
}
</style>
//mobile
<style lang="scss">
.main-carousel-offshore-mobile {
  .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 0 !important;
  }
  .v-item-group {
    // height: 100%;
    // width: 100%;
    .v-carousel__controls {
      align-items: center;
      background-color: none;
      text-align: center;
      bottom: 0;
      display: -webkit-box;
      display: flex;
      height: 10px;
      -webkit-box-pack: center;
      justify-content: center;
      list-style-type: none;
      position: relative !important;
      width: 100%;
      z-index: 1;
    }
  }
  .v-btn--icon.v-size--small .v-icon,
  .v-btn--fab.v-size--small .v-icon {
    font-size: 15px !important;
    color: rgba(0, 0, 0, 0.54);
  }
  .theme--light.v-btn.v-btn--icon {
    &::before {
      opacity: 0;
    }
  }
  .v-carousel__controls__item {
    margin: 0 auto;
  }
  .v-window__prev,
  .v-window__next {
    background-color: #ffffff;
    color: #000000;
  }
}
</style>
