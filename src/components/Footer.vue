<template>
  <div id="Footer">
    <div class="foot-box">
      <h3 class="title-footer">合作者</h3>
      <tyh-link
        target="_blank"
        url="https://github.com/Tyh2001"
        style="margin-top: 12px"
      >
        <div class="userBox">
          <img
            draggable="false"
            class="myPhoto"
            src="../views/images/photo.jpg"
          />
          <span class="userName">Tyh2001</span>
        </div>
      </tyh-link>

      <h3 class="title-footer">链接</h3>
      <div id="footer-link">
        <!-- 链接 -->
        <div class="link">
          <ul class="link-ul">
            <li>
              <tyh-link target="_blank" url="https://github.com/Tyh2001">
                Github
              </tyh-link>
            </li>
            <li>
              <tyh-link
                target="_blank"
                url="https://github.com/Tyh2001/tyh-ui-next"
              >
                官方仓库
              </tyh-link>
            </li>
            <li>
              <tyh-link
                target="_blank"
                url="https://www.npmjs.com/package/tyh-ui-next"
              >
                NPM
              </tyh-link>
            </li>
            <li>
              <tyh-link
                target="_blank"
                url="https://github.com/Tyh2001/tyh-ui2/blob/master/CHANGELOG.md"
              >
                更新日志
              </tyh-link>
            </li>
          </ul>
        </div>
        <div class="link">
          <ul class="link-ul">
            <li>
              <tyh-link target="_blank" url="https://v3.cn.vuejs.org/">
                Vue3
              </tyh-link>
            </li>
            <li>
              <tyh-link target="_blank" url="https://cn.vitejs.dev/">
                Vite
              </tyh-link>
            </li>
          </ul>
        </div>
      </div>

      <p class="code">
        <img
          draggable="false"
          class="image-logo"
          src="../views/images/logo.png"
        />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <tyh-link target="_blank" url="https://beian.miit.gov.cn">
          浙ICP备2021024540号-1
        </tyh-link>
      </p>
    </div>
  </div>
</template>

<script>
export default { name: 'Footer' }
</script>

<style lang='less' scoped>
// 页脚
#Footer {
  background: #f7fbfd;
  padding: 60px 0;
  box-sizing: border-box;
  user-select: none;
  .foot-box {
    width: 800px;
    margin: auto;
    .title-footer {
      margin-top: 50px;
      font-size: 20px;
      font-weight: 600;
      color: #515a6e;
    }
    .tyh-link {
      display: inline-block;
      .userBox {
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        // 头像
        .myPhoto {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        // 用户昵称
        .userName {
          font-size: 20px;
          color: #515a6e;
          margin-left: 10px;
        }
      }
    }
    #footer-link {
      display: flex;
      .link {
        width: 180px;
        .link-ul {
          li {
            list-style: none;
            line-height: 40px;
          }
        }
      }
    }
    .code {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .image-logo {
        width: 20px;
      }
      .tyh-link:hover {
        color: #409eff;
      }
    }
  }
}
</style>
