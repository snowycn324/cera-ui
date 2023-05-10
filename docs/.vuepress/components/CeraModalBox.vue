<template>
  <div>
    <el-button @click="summonModal" type="success">Summon Modal</el-button>
    <cera-modal v-model="showModal">
      <div class="modal-content">
        <p class="modal-title">Do you love Wu?</p>
        <div class="button-box">
          <el-button @click="hideModal" type="primary">Yes I do.</el-button>
          <el-button @click="hideModal" type="danger">I am Wu's big fan.</el-button>
        </div>
      </div>
    </cera-modal>
  </div>
</template>

<script>
  export default {
    name: "CeraModalBox",
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      summonModal() {
        this.showModal = true;
      },
      hideModal() {
        this.showModal = false;
      }
    }
  }
</script>

<style scoped>
.modal-content {
  background-color: #fff;
  width: 400px;
  height: 180px;
  border-radius: 10px;
}

.modal-title {
  text-align: center;
  font-weight: 700;
  margin: 40px 0;
}

.button-box {
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
}
</style>