<template>
  <div class="goodsDetail">
    <div class="no_network">
      <img src="/images/no_network.png" alt="">
      <span>哎呀，这东西被外星人带走了...</span>
    </div>
    <div class="section">
      <!--download-start-->
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

      <!--download-end-->
      <div class='comment' id="comment">



      </div>

      <!-- 没订阅 -->
      <div class='coupon' id="coupon"></div>

      <!-- 已订阅 -->
      <!-- <div class='coupon' id="coupon" style="display:block;"></div> -->

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
  export default {
    comments: {},
    data() {
      return {

      };
    },
    created() {
      // console.log(this.$route.query.nid);
      // 获取基本数据
      (async () => {
        let res = await getBaseInfo({
          nid: this.$route.query.nid
          // nid: 1000563538534386
        });
        if (res.state === 'false') {
          console.log(res);
        } else {
          console.log(res.data);
        };
      })();
    },
    methods: {

    }
  };

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goodsDetail {
    width 100%;
    height 100%;
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
        font-size: 0.30rem;
        color: #999999;
      }
    }
  }

  .section {

    width: 100%;
    height: 100%;
    .comment {
      position: relative;
      padding: 0.28rem 0.32rem 0.0rem 0.32rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .pic {
        width: 2rem;
        height: 2rem;
        float: left;
      }
      .content {
        position: relative;
        padding-left: 0.20rem;
        width: 5rem;
        >span {
          display: flex;
          font-size: 0.28rem;
          color: #333333;
          line-height: 0.36rem;
          &.title {
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          &.orldpirce {
            font-size: 0.28rem;
            color: #AFAFAF;
            text-decoration: line-through;
            margin-top: 0.5rem;
          }
        }
      }
      .JG {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        position: absolute;
        bottom: -0.05rem;
        div {
          font-size: 0.30rem;
          color: #FF5548;
          &:first-of-type {
            margin-right: 0.12rem;
          }
        }
      }
    }
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
            margin-bottom: 0.20rem;
            >span {
              color: #fff;
              &:first-of-type {
                font-size: 0.26rem;
              }
              &:last-of-type {
                font-size: 0.60rem;
                line-height: 0.60rem;
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
        margin: 0.30rem auto;
        font-size: 0.34rem;
        line-height: 0.80rem;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, #ff8e6b, #ff756a);
        border-radius: 0.10rem
      }
      .line {
        // position: absolute;
        // bottom: 0;
        width: 100%;
        height: 0.20rem;
        background-color: #f5f5f6;
      }
    }
    .fanli {
      >.title {
        padding: 0 0.30rem;
        font-size: 0.34rem;
        color: #333333;
        margin-top: 0.30rem;
        line-height: 0.34rem;
      }
      .rail {
        padding: 0 0.30rem;
        .cont {
          margin-top: 0.40rem;
          width: 100%;
          height: 0.70rem;
          background-color: #fff3f0;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            width: 0.42rem;
            height: 0.46rem;
            margin-left: 0.30rem;
            margin-right: 0.20rem;
          }
          span {
            font-size: 0.24rem;
            color: #FF887F;
          }
        }
      }
      .text {
        padding: 0 0.30rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.24rem;
        span {
          font-size: 0.28rem;
          line-height: 0.40rem;
          color: #666;
          &:first-of-type {
            margin-top: 0.30rem;
            margin-bottom: 0.20rem;
            line-height: 0.28rem;
            color: #333;
          }
        }
      }
      .line {
        width: 100%;
        height: 0.20rem;
        background-color: #F7F7F7;
      }
    }
    .trendChart {
      padding: 0 0.30rem;
      .top {
        width: 100%;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 0.34rem;
          color: #333;
          line-height: 0.34rem;
          margin-top: 0.30rem;
        }
        .buyIndex {
          font-size: 0.28rem;
          line-height: 0.28rem;
          margin-top: 0.40rem;
          color: #333;
          span {
            color: #FF5548;
          }
        }
        @-webkit-keyframes animate-positive {
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
                -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
                box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
                -webkit-transition: width .6s ease;
                -o-transition: width .6s ease;
                transition: width .6s ease;
                -moz-transition: width .6s ease;
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
                    content: "";
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
              width: 0.80rem;
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
            line-height: 0.40rem;
            display: inherit;
          }
        }
      }
      .canTop {
        margin-top: 0.6rem;
        margin-bottom: 0.60rem;
        .tendency {
          float: left;
          font-size: 0.28rem;
          margin-bottom: 0.60rem;
          span {
            color: #00d093;
          }
        }
        .minpirce {
          float: right;
          font-size: 0.28rem;
          margin-bottom: 0.60rem;
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
    opacity: .80;
  }

  .white_content {
    display: none;
    position: absolute;
    top: 40%;
    left: 50%; // width: 5.40rem;
    // height: 1.48rem;
    margin-left: -3.270rem;
    margin-top: -0.24rem;
    border-radius: 0.1rem;
    background-color: white;
    z-index: 1002;
    overflow: auto;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.50rem 0.52rem;
      span {
        font-size: 0.34rem;
        line-height: 0.34rem;
        margin-bottom: 0.16rem;
        color: #999;
        &:first-of-type {
          color: #333;
          margin-bottom: 0.30rem;
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
    height: 0.90rem;
    width: 100%;
    background-color: rgba( 255, 255, 255, .45);
    img {
      margin-left: 0.30rem;
      width: 0.64rem;
      height: 0.62rem;
    }
    span {
      margin-left: 0.24rem;
      font-size: 0.30rem;
      color: #333;
      line-height: 0.90rem;
    }
    button {
      border: none;
      float: right;
      margin-left: 0.40rem;
      width: 1.20rem;
      height: 0.62rem;
      border-radius: 0.30rem;
      font-size: 0.30rem;
      color: #fff;
      background-color: #ff756a;
      text-align: center;
      line-height: 0.62rem;
    }
  }

</style>
