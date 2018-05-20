<template>
  <div class="goodsDetail">
    <div class="no_network">
      <img src="/images/no_network.png" alt="">
      <span>哎呀，这东西被外星人带走了...</span>
    </div>
    <div class="section">
      <!-- 下载条 -->
      <div id="download" class="hide">
        <div class="download flex flex-align-center flex-r ">
          <img src="/images/logo.png" alt="">
          <span>马上下载，享受有券的好生活！</span>
          <button onclick="javascript:location_by_link()">下载</button>
        </div>
        <div class="line" style="clear:both; width: 100%;height: 0.20rem;
        background-color: #f5f5f6;">
        </div>
      </div>
      <!-- 商品信息 -->
      <v-comment :goods-info="goodsInfo"></v-comment>
      <!-- 优惠券和返利 -->
      <!-- <div class="coupon">
        <div class="voucher">
          <div class="line"></div>
          <span class="title" style="padding: 0 0.30rem;             display:block;         font-size: 0.34rem;         color: #333333;         margin-top: 0.30rem;         margin-bottom: 0.50rem;         line-height: 0.34rem;">识惠福利
            <a class="rebatehelp" style="float:right;font-size:0.24rem;color:#808080;vertical-align: top">如何返利？</a>
          </span>
          <div class="coupons coupon_img_1 anp">
            <div class="right">
              <span class="text">优惠券</span>
              <span class="data">有效期： 2018.05.17至 2018.07.13 </span>
            </div>
            <div class="left">
              <div class="pirce">
                <div>
                  <span class="i">￥</span>
                  <span class="text"> 10 </span>
                </div>
              </div>
              <span class="icon">
                <span>立即领取</span>
              </span>
            </div>
          </div>
          <div class="coupons coupon_img_2 anp">
            <span class="text">领券后下单</span>
            <span class="pirce">预计可领
              <span>
                <span>¥</span> 10.63 </span>返利红包</span>
          </div>
          <div class="line"></div>
        </div>
      </div> -->

      <div class="fanli" id="fanli">

      </div>



      <div class='trendChart' id="trendChart">

      </div>

    </div>
    <div style="clear:both;height:10px;"></div>
    <!-- <input id="Button1" type="button" value="点击弹出层" onclick="ShowDiv('MyDiv','fade')" /> -->
    <!--弹出层时背景层DIV-->
    <div id="fade" class="black_overlay">
    </div>
    <div id="MyDiv" class="white_content">
      <div class="content">
        <span>淘口令复制成功</span>
        <span id="command">淘口令 ¥ 9SGQ08nXBPh ¥ 复制成功</span>
        <span>主人，快去【淘宝】看看</span>
      </div>
      <div class="btn">
        <button onclick="CloseDiv('MyDiv','fade')">取消</button>
        <span class="line"></span>
        <button id="copyCode">好的</button>
      </div>
    </div>
    <div id="backTo" class="backToXiaoYou" style="display:none">
      <img src="/images/back_home_normal.png" alt="">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {
    getBaseInfo
  } from '../api/api';
  import comment from '../components/goodsDetail/comment.vue';
  export default {
    components: {
      'v-comment': comment
    },
    data() {
      return {
        goodsInfo: {}
      };
    },
    created() {
      // 获取基本数据
      (async () => {
        let nid = this.$route.query.nid ? this.$route.query.nid : '1000' + this.$route.query.itemid;
        let res = await getBaseInfo({
          nid: nid
        });
        if (res.state === 'false') {
          console.log(res);
        } else {
          this.goodsInfo = res.data;
          // console.log(res.data);
        }
      })();
    },
    methods: {}
  };

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goodsDetail {
    width: 100%;
    height: 100%;

    .no_network {
      width: 4.5rem;
      height: 5rem;
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -2.5rem;
      margin-left: -2.25rem;

      img {
        width: 100%;
      }

      span {
        margin-top: 0.08rem;
        font-size: 0.3rem;
        color: #999999;
      }
    }
  }

  .section {
    width: 100%;
    height: 100%;

    .coupon {
      position: relative;

      .content {
        // width: 100%;
        height: 1.64rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0.4rem 0.3rem;

        .left {
          width: 4.83rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .pirce {
            height: 0.6rem;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            margin-bottom: 0.2rem;

            >span {
              color: #fff;

              &:first-of-type {
                font-size: 0.26rem;
              }

              &:last-of-type {
                font-size: 0.6rem;
                line-height: 0.6rem;
              }
            }
          }

          .data {
            font-size: 0.26rem;
            color: #ffe9d6;
          }
        }

        .right {
          width: 2.05rem;
          font-size: 0.32rem;
          color: #fff;
          line-height: 1.64rem;
          padding-left: 0.32rem;
          box-sizing: border-box;
        }
      }

      .Subscribed {
        height: 0.8rem;
        width: 6.91rem;
        margin: 0.3rem auto;
        font-size: 0.34rem;
        line-height: 0.8rem;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, #ff8e6b, #ff756a);
        border-radius: 0.1rem;
      }

      .line {
        // position: absolute;
        // bottom: 0;
        width: 100%;
        height: 0.2rem;
        background-color: #f5f5f6;
      }
    }

    .fanli {
      >.title {
        padding: 0 0.3rem;
        font-size: 0.34rem;
        color: #333333;
        margin-top: 0.3rem;
        line-height: 0.34rem;
      }

      .rail {
        padding: 0 0.3rem;

        .cont {
          margin-top: 0.4rem;
          width: 100%;
          height: 0.7rem;
          background-color: #fff3f0;
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            width: 0.42rem;
            height: 0.46rem;
            margin-left: 0.3rem;
            margin-right: 0.2rem;
          }

          span {
            font-size: 0.24rem;
            color: #FF887F;
          }
        }
      }

      .text {
        padding: 0 0.3rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.24rem;

        span {
          font-size: 0.28rem;
          line-height: 0.4rem;
          color: #666;

          &:first-of-type {
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;
            line-height: 0.28rem;
            color: #333;
          }
        }
      }

      .line {
        width: 100%;
        height: 0.2rem;
        background-color: #F7F7F7;
      }
    }

    .trendChart {
      padding: 0 0.3rem;

      .top {
        width: 100%;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 0.34rem;
          color: #333;
          line-height: 0.34rem;
          margin-top: 0.3rem;
        }

        .buyIndex {
          font-size: 0.28rem;
          line-height: 0.28rem;
          margin-top: 0.4rem;
          color: #333;

          span {
            color: #FF5548;
          }
        }

        @keyframes animate-positive {
          0% {
            width: 0;
          }

          100% {
            width: 80%;
          }
        }

        @keyframes animate-positive {
          0% {
            width: 0;
          }
        }

        .progressBar {
          width: 100%;

          .Bar {
            margin-top: 0.6rem;
            width: 100%;
            height: 0.16rem;
            position: relative;

            .progress_jin {
              height: 7px;
              background: #FFEFD1;
              border-radius: 5px;
              box-shadow: none;
              overflow: visible;
              border: 1px solid #FCCA59;
              position: relative;

              .progress-bar {
                float: left;
                width: 0;
                height: 100%;
                font-size: 12px;
                line-height: 20px;
                color: #fff;
                background: #f13c40;
                text-align: center;
                background-image: linear-gradient(to right, #FFD44E, #F13940);
                background-image: -webkit-linear-gradient(to right, #FFD44E, #F13940);
                -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
                box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
                -webkit-transition: width 0.6s ease;
                -o-transition: width 0.6s ease;
                transition: width 0.6s ease;
                -moz-transition: width 0.6s ease;
                box-shadow: none;
                border-radius: 0;
                position: relative;
                -webkit-animation: animate-positive 2s;
                animation: animate-positive 2s;
                -o-animation: animate-positive 2s;
                -moz-transition: animate-positive 2s;
                border-radius: 5px;

                .progress-value {
                  width: 39px;
                  height: 20px;
                  line-height: 20px;
                  border-radius: 3px;
                  background: #F13940;
                  box-shadow: 0 2px 2px rgba(255, 141, 141, 0.4);
                  font-size: 12px;
                  font-weight: 400;
                  color: #fff;
                  text-align: center;
                  position: absolute;
                  bottom: 18px;
                  right: -15px;

                  &::after {
                    content: '';
                    border-top: 7px solid #F13940;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    position: absolute;
                    bottom: -6px;
                    left: 35%;
                  }
                }
              }
            }

            .des {
              position: absolute;
              top: 0;
              text-align: center;
              font-size: 0.26rem;
              color: #666;
              width: 0.8rem;
              height: 0.44rem;
            }

            .progress {
              position: absolute;
              bottom: 0;
              display: inline-block;
              width: 100%;
            }
          }

          >span {
            margin-top: 0.2rem;
            font-size: 0.28rem;
            line-height: 0.4rem;
            display: inherit;
          }
        }
      }

      .canTop {
        margin-top: 0.6rem;
        margin-bottom: 0.6rem;

        .tendency {
          float: left;
          font-size: 0.28rem;
          margin-bottom: 0.6rem;

          span {
            color: #00d093;
          }
        }

        .minpirce {
          float: right;
          font-size: 0.28rem;
          margin-bottom: 0.6rem;

          span {
            color: #FF5548;
          }
        }
      }
    }
  }

  .backToXiaoYou {
    width: 1.08rem;
    height: 1.08rem; // background-color: #FF5548;
    border-radius: 50%;
    position: fixed;
    bottom: 2.28rem;
    right: 0.08rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .black_overlay {
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1001;
    -moz-opacity: 0.8;
    opacity: 0.8;
  }

  .white_content {
    display: none;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -3.27rem;
    margin-top: -0.24rem;
    border-radius: 0.1rem;
    background-color: white;
    z-index: 1002;
    overflow: auto;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem 0.52rem;

      span {
        font-size: 0.34rem;
        line-height: 0.34rem;
        margin-bottom: 0.16rem;
        color: #999;

        &:first-of-type {
          color: #333;
          margin-bottom: 0.3rem;
        }
      }
    }

    .btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 0.92rem;
      border-top: 0.01rem solid #ddd;

      button {
        line-height: 0.92rem;
        text-align: center;
        font-size: 0.34rem;
        color: #333;
        border: none;
        background-color: white;
        width: 50%;
        height: 0.91rem;

        &:last-of-type {
          color: #FF756A;
        }
      }

      .line {
        position: absolute;
        left: 50%;
        width: 0.01rem;
        height: 0.6rem;
        background-color: #ddd;
      }
    }
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  .download {
    z-index: 2;
    height: 0.9rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.45);

    img {
      margin-left: 0.3rem;
      width: 0.64rem;
      height: 0.62rem;
    }

    span {
      margin-left: 0.24rem;
      font-size: 0.3rem;
      color: #333;
      line-height: 0.9rem;
    }

    button {
      border: none;
      float: right;
      margin-left: 0.4rem;
      width: 1.2rem;
      height: 0.62rem;
      border-radius: 0.3rem;
      font-size: 0.3rem;
      color: #fff;
      background-color: #ff756a;
      text-align: center;
      line-height: 0.62rem;
    }
  }

</style>
