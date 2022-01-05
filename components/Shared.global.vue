<template>
  <div class="main-carousel">
    <v-carousel
      v-if="data !== 1"
      light
      hide-delimiter-background
      :show-arrows="false"
      class="custom-active-icon"
      height="100%"
    >
      <v-carousel-item>
        <v-row style="align-content: center;">
          <v-col
            cols="4"
            class="pt-0"
            v-for="(item, i) in items.listData"
            :key="`${item.id} + ${i}`"
          >
            <v-img :src="item.image" max-height="315px">
              <div class="h-100" style="display: flex; align-items: end; ">
                <v-card-text>
                  <v-row>
                    <v-col cols="8" class="pl-1 pr-0">
                      <div
                        class="fs-20 font-weight-bold white--text text-truncate"
                      >
                        {{ item.title }}
                      </div>
                    </v-col>
                    <v-col cols="4" class="pl-0">
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
      </v-carousel-item>
    </v-carousel>
    <div v-else>
      <v-row
        v-if="!$isNullOrEmpty(items.totalData)"
        style="align-content: center;"
      >
        <v-col
          cols="6"
          v-for="(item, i) in items.totalData.listDataHot"
          :key="`${item.id} + ${i}`"
        >
          <v-img :src="item.image" width="100%">
            <div class="h-100" style="display: flex; align-items: end; ">
              <v-card-text>
                <v-row>
                  <v-col cols="9" class="pl-1 ">
                    <div
                      class="fs-24 font-weight-bold white--text text-truncate"
                    >
                      {{ item.title }}
                    </div>
                  </v-col>
                  <v-col cols="3" class="">
                    <div>
                      <v-btn
                        small
                        height="28"
                        width="115"
                        class="success"
                        depressed
                        rounded
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
        <v-col
          cols="4"
          class="pt-0"
          v-for="(item, i) in items.totalData.listData"
          :key="`${item.id} + ${i}`"
        >
          <v-img :src="item.image" max-height="315px">
            <div class="h-100" style="display: flex; align-items: end; ">
              <v-card-text>
                <v-row class="">
                  <v-col cols="8" class="pl-1 ">
                    <div
                      class="fs-20 font-weight-bold white--text text-truncate"
                    >
                      {{ item.title }}
                    </div>
                  </v-col>
                  <v-col cols="4" class="px-0">
                    <div>
                      <v-btn small class="success" depressed rounded
                        >Xem thêm
                        <span>
                          <v-icon>mdi-chevron-right</v-icon>
                        </span></v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" class="pt-0 pl-1 pr-0">
                    <div class="fs-13 white--text">{{ item.content }}</div>
                  </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" offset="1" class="pa-0">
          <div align="center">
            <a class="success--text text-decoration-underline">
              Xem thêm
              <span>
                <v-icon size="23" class="success--text"
                  >mdi-chevron-right</v-icon
                >
              </span>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'data'],

  data() {
    return {}
  }
}
</script>

<style lang="scss">
.main-carousel {
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
