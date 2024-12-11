<template>
  <div style="--van-nav-bar-icon-color:#F19290">
  <van-nav-bar
    title="添加任务"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
  />
  </div>
  <div class="page-contain">
    <div class="content_addIndex">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" class="image-slider_task" alt="商品图片" />
        </van-swipe-item>
      </van-swipe>

      <van-loading vertical v-if="isLoading" class="loading-overlay">
        <template #icon>
          <van-icon name="star-o" size="30" />
        </template>
        加载中...
      </van-loading>

      <van-form class="form-container_task">
        <div>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
          />
          <!-- <van-field label="🔖选择预设" v-model="presetIndex" :options="presets" @change="onPresetChange($event)" /> -->
          <van-field
            v-model="presetIndex"
            is-link
            readonly
            label="🔖选择预设"
            placeholder="选择预设"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" round position="bottom ">
            <van-picker
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
              clearable
            />
          </van-popup>
          <van-field
            label="📌任务名称"
            v-model="title"
            placeholder="请输入任务名称"
            :autofocus="false"
            clearable
          />
          <van-field
            label="📝任务详情"
            v-model="desc"
            placeholder="请输入任务详情"
            type="textarea"
            rows="3"
            :autofocus="false"
            clearable
          />
          <!-- <van-field label="🤖任务对象" v-model="useName" placeholder="请输入任务对象" :autofocus="false" clearable/> -->
          <van-field
            v-model="useName"
            is-link
            readonly
            name="picker"
            label="🤖商品对象"
            placeholder="点击选择商品对象"
            @click="showPicker_1 = true"
            :rules="[{ required: true, message: '请选择商品对象' }]"
          />
          <van-popup v-model:show="showPicker_1" position="bottom">
            <van-picker
              :columns="userColumns"
              @confirm="onConfirm_1"
              @cancel="showPicker_1 = false"
            />
          </van-popup>
          <van-field
            label="💰pp币价格"
            v-model="credit"
            placeholder="请输入任务pp币(整数)"
            :autofocus="false"
            clearable
          />
        </div>
      </van-form>

      <div class="footer_task">
        <van-button class="btn-reset" type="default" @click="resetItem"
          >重置</van-button
        >
        <van-button class="btn-save" color="#F19290" type="primary" @click="saveItem"
          >保存</van-button
        >
      </div>
    </div>
    <van-dialog
      v-model:show="show"
      title="🥰 温馨提示"
      :message="message"
      :show-cancel-button="false"
    >
    </van-dialog>
    <van-dialog
      v-model:show="show_1"
      title="🥰恭喜"
      :message="message"
      width="70vw"
      height="30vw"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
    </van-dialog>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // 添加了 onUnmounted
import axios from "axios";
import png from "@/util/Mission.gif";
import { useRouter } from "vue-router";
import { Field, Form, Button, Swipe, SwipeItem } from "vant";
// 解析Jwt令牌
import jwtDecode from "jwt-decode";

export default {
  components: {
    VanField: Field,
    VanForm: Form,
    VanButton: Button,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
  },

  setup() {
    const show = ref(false);
    const show_1 = ref(false);
    const message = ref("");
    const isLoading = ref(false);
    const onClickLeft = () => router.replace("/Task");
    const presetIndex = ref("无预设");
    const showPicker = ref(false);
    const title = ref("");
    const desc = ref("");
    const useName = ref("");
    const userColumns = ref([]);
    const showPicker_1 = ref(false);
    const credit = ref(0);

    const router = useRouter();
    const images = [png];
    onMounted(() => {
      fetchLoginToken();
      fetchUserData();
    });
    const token = localStorage.getItem("jwtToken"); // 从localStorage获取JWT令牌

    if (!token) {
      router.replace("/login");
    }
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    let userId = "";
    const fetchLoginToken = () => {
      axios
        .post("/api/loginToken?token=" + token)
        .then((response) => {
          if (response.data.code == 0) {
            console.error(response.data.data);
            router.replace("/login");
            return;
          }
          const decodedToken = jwtDecode(token);
          // 从解码后的令牌中获取特定的数据
          userId = decodedToken.id; // 从令牌中获取用户ID
          // 在这里处理登录令牌接口的响应
          // 如果需要执行一些特定的操作，可以在这里添加代码
        })
        .catch((error) => {
          console.error("请求loginToken接口失败", error);
          router.replace("/login");
        });
    };
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user", {
          headers,
        }); // 替换为实际的API端点
        const userData = response.data.data; // 假设API返回一个包含用户数据的数组
        // 2. 将用户数据转换为选择器的列格式
        userColumns.value = userData
          .filter((user) => user.nameId !== userId)
          .map((user) => ({
            text: user.name,
            value: user.nameId,
          }));
      } catch (error) {
        console.error("获取用户数据时出错", error);
      }
    };
    const onConfirm_1 = ({ selectedOptions }) => {
      useName.value = selectedOptions[0]?.text;
      showPicker_1.value = false;
    };
    const columns = [
      { text: "无预设", value: "0" },
      { text: "不生气卡", value: "1" },
      { text: "打扫房间", value: "2" },
      { text: "健康运动", value: "3" },
      { text: "做小手工", value: "4" },
      { text: "为宝宝做一顿丰盛大餐吧", value: "5" },
      { text: "外出探店", value: "6" },
      { text: "随机买单一件购物车里的东西", value: "7" },
    ];

    const onConfirm = ({ selectedOptions }) => {
      showPicker.value = false;
      presetIndex.value = selectedOptions[0].text;
      onPresetChange(selectedOptions[0].text); // 调用 onPresetChange 函数，手动触发值变化
    };

    const onPresetChange = (value) => {
      // 根据选择的预设值来自动填充其他信息
      if (value === "不生气卡") {
        title.value = value;
        desc.value = "我错了，潘潘大王！饶了我吧！~";
      } else if (value === "打扫房间") {
        title.value = value;
        desc.value = "我们来一起打扫房间吧！给小鸡翅一个干净的环境！";
      } else if (value === "健康运动") {
        title.value = value;
        desc.value = "一起健身或者打球、散步，大家要健健康康~";
      } else if (value === "做小手工") {
        title.value = value;
        desc.value = "想要一件手工小礼物，简单的就行~";
      } else if (value === "为宝宝做一顿丰盛大餐吧") {
        title.value = value;
        desc.value = "想请大厨为我做一顿大餐";
      } else if (value === "外出探店") {
        title.value = value;
        desc.value = "我们要一起吃很多很多顿饭，从这顿开始";
      } else if (value === "随机买单一件购物车里的东西") {
        title.value = value;
        desc.value = "给你的宝宝买个小东西吧~";
      }
    };

    const resetItem = () => {
      presetIndex.value = "无预设"; // 选择预设的值重置为0，使用.value
      title.value = ""; // 任务名称重置为空
      desc.value = ""; // 任务详情重置为空
      credit.value = 0; // pp币价格重置为0
      useName.value = "";
    };

    const saveItem = () => {
      isLoading.value = true;
      // 准备要发送的数据对象
      if (desc.value == "") {
        desc.value = "😂这个人很懒，没有填写相关的任务详情！";
      }
      if (useName.value == "" || title.value == "") {
        message.value = "请完整填好上述信息！"
        show.value = true;
        isLoading.value = false;
        return;
      }
      const value = parseFloat(credit.value);
      if (!Number.isInteger(value)) {
        message.value = "pp币只能是整数哦，请重新输入！"
        show.value = true;
        isLoading.value = false;
        return;
      }
      const task = {
        taskName: title.value,
        // 创建人的id
        founderId: userId,
        taskText: desc.value,
        taskCredit: credit.value,
        useName: useName.value,
      };

      // 发送 POST 请求到指定的 URL
      fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      })
        .then((response) => {
          if (response.ok) {
            // 请求成功，可以处理成功的逻辑
            message.value = "添加成功！";
          } else {
            // 请求失败，处理错误逻辑
            message.value = "保存任务失败";
          }
        })
        .catch((error) => {
          // 捕获异常
          console.error("保存任务时出现错误:", error);
        });
      show_1.value = true;
      setTimeout(() => {
        router.replace("/Task");
      }, 1000); // 2000毫秒等于2秒
      isLoading.value = false;
    };

    return {
      message,
      show,
      show_1,
      isLoading,
      columns,
      onConfirm,
      showPicker,
      presetIndex,
      title,
      desc,
      useName,
      credit,
      resetItem,
      saveItem,
      onClickLeft,
      images,
      userColumns,
      onConfirm_1,
      showPicker_1,
    };
  },
};
</script>

<style>
.page-contain {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  /* 显示垂直滚动条 */
  overflow-x: hidden;
  /* 隐藏水平滚动条 */
  zoom: 1;
  /* 禁止页面内容缩放 */
}

.image-slider_task {
  width: 100%;
  height: 80%;
  margin-top: 5px;
  transform: translateX(0%);
}

.form-container_task {
  margin-top: 28px;
}

.footer_task {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.content_addIndex {
  width: 90%;
  margin-bottom: 20px;
}

.btn-reset {
  flex: 1;
  margin-right: 10px;
}

.btn-save {
  flex: 1;
  margin-left: 10px;
}

.bottom-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.van-picker__confirm {
    color:#F19290;
}
</style>
