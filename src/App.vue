<template>
  <div class="container">
    <!-- sidebar -->
    <div class="sidebar">
      <Sidebar/>
    </div>

    <!-- content -->
    <div class="content">
      <router-view /> 
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
}

.sidebar {
  flex: 0 0 200px; /* Đặt chiều rộng cố định cho sidebar */
}

.content {
  flex: 1; /* Content sẽ mở rộng để điền vào phần còn lại của container */

}
@media (min-width: 1024px) {
  .content {
    padding-left: 50px; /* Thêm khoảng cách 10px vào lề trái của content trên màn hình desktop */
  }
}
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Thay đổi thành cột khi kích thước màn hình nhỏ hơn hoặc bằng 768px */
  }

  .sidebar {
    flex: none; /* Bỏ flex để sidebar không co dãn */
    width: 100%; /* Đặt chiều rộng của sidebar thành 100% để nó tràn ngang */
  }
}
</style>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "main",
  components: {
    Sidebar
  },
};
</script>