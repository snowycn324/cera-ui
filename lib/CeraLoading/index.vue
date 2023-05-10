<template>
  <transition name="view-fade">
    <div v-show="value" class="cera-loading-container">
      <div class="wrapper">
        <div class="orange ball" />
        <div class="cyan ball" />
        <div class="blue ball" />
        <div class="yellow ball" />
      </div>
      <div class="cera-loading-label" :class="labelClass">
        {{ label }}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  export default {
    name: "CeraLoading",
    model: {
      prop: "value",
      event: "updateValue"
    },
    props: {
      value: {
        type: Boolean,
        default: true,
      },
      label: {
        type: String,
        default: "Loading"
      },
      labelClass: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  .cera-loading-container {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px
  }
  .ball {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    margin: 0 6px;

    animation: 1.5s bounce ease infinite;
  }

  .orange {
    background-color: #009500;
  }

  .cyan {
    background-color: #2AC72A;
    animation-delay: .125s;
  }

  .blue {
    background-color: #009500;
    animation-delay: .25s;
  }

  .yellow {
    background-color: #2AC72A;
    animation-delay: .50s;
  }

  .cera-loading-label {
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    margin: 10px 0 30px;
  }

  @keyframes bounce {
    50% {
      transform: translateY(25px);
    }
  }
</style>