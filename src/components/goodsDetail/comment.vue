<template>
  <div class='comment' id="comment">
    <div class='pic'>
      <img :src="goodsInfo.pic?goodsInfo.pic.replace('75x75','300x300'):''" alt="">
    </div>
    <div class='content'>
      <span class="title">
        {{goodsInfo.title}}
      </span>
      <!-- 有券有返利 -->
      <div class="coufanli flex-v" v-if="goodsInfo.couponcount > 0">
        <span class="price_label">
          <div id="history">历史新低</div>
          <div id="month"></div>
        </span>
        <span class="orldpirce">¥ {{goodsInfo.oldprice}}
        </span>
        <div class='JG'>
          <div>
            <span>券后价</span>
          </div>
          <div>
            <span>¥ {{goodsInfo.price}}
            </span>
          </div>
        </div>
      </div>
      <!-- 无券有返利 -->
      <div class="nocounofanli" v-else-if="goodsInfo.couponcount == 0">
        <span class="price_label">
          <div id="history">历史新低</div>
          <div id="month"></div>
        </span>
        <div class='JG'>
          <div style="color:#999">原价</div>
          <div>
            <span style="color:#999">¥ {{goodsInfo.price}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: ['goodsInfo']
  };

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .comment {
    position: relative;
    padding: 0.28rem 0.32rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .pic {
      width: 2rem;
      height: 2rem;
      float: left;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 0.04rem;
      }
    }

    .content {
      position: relative;
      padding-left: 0.2rem;
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
      }
      .coufanli,
      .nocounofanli{
        .price_label {
          #history {
            width 0.9rem;
            display: block;
            margin: 0.16rem 0.08rem 0 0;
            font-size: 0.2rem;
            color: #c19267;
            padding: 0 0.08rem;
            border: 1px solid #c19267;
            border-radius: 0.04rem;
            height: 0.32rem;
            line-height: 0.32rem;
          }
          #month {}
        }
        .orldpirce {
          font-size: 0.28rem;
          color: #AFAFAF;
          text-decoration: line-through;
          margin-top: 0.1rem;
          display: flex;
          line-height: 0.36rem;
        }
        .JG {
          display: flex;
          line-height: 0.36rem;
          >div {
            &:first-of-type {
              >span {
                position: relative;
                top: 0.01rem;
              }
            }
            &:last-of-type {
              >span {
                position: relative;
                top: 0.01rem;
              }
            }
          }
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
        font-size: 0.3rem;
        color: #FF5548;

        &:first-of-type {
          margin-right: 0.12rem;
        }
      }
    }
  }

</style>
