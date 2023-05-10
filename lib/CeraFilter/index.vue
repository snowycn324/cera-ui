<template>
  <div class="cera-filter-box">
    <div class="cera-filter-title">
      <span>{{ title }}</span>
      <span @click="clearAllOptions" class="cera-filter-clear" v-if="dirty">CLEAR</span>
    </div>
    <ul>
      <li class="cera-filter-item" v-for="option in options" :key="option.key" @click="updateValue(option)">
        <div class="cera-filter-input">
          <CeraTickIcon class="cera-filter-tick" v-if="option.value" />
          <input @change="changeValue" v-model="option.value" :name="option.key + option.label" type="checkbox" />
          <label class="cera-filter-label" :for="option.key + option.label">{{ option.label }}</label>
        </div>
        <span class="cera-filter-count">
          {{ option.count }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import CeraTickIcon from "../Icons/TickIcon.vue";

interface FilterOption {
  /**
   * @type {string | number} The unique key of the option.
   */
  key: string | number,
  /**
   * @type {boolean} The value of option
   */
  value: boolean,
  /**
   * @type {string} Label to display for the option
   */
  label: string,
  [other: string]: unknown
}

export default {
  name: "CeraFilter",
  components: {
    CeraTickIcon,
  },
  data() {
    return {
      timer: null,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<FilterOption[]>,
      required: true,
    },
  },
  computed: {
    dirty() {
      return this.options.find(option => option.value)
    }
  },
  methods: {
    changeValue() {
      this.$emit("updateValue");
    },
    /**
     * update value
     * @param option FilterOption
     */
    updateValue(option: FilterOption) {
      option.value = !option.value;
      this.changeValue();
    },
    clearAllOptions() {
      this.options.forEach(option => {
        option.value = false
      });
      this.changeValue();
    }
  }
}
// import { Vue, Component, Prop } from 'vue-property-decorator'

// @Component
// export default class CeraFilter extends Vue {
//   name = "CeraFilter"

//   @Prop(String) title: String = ""
// }
</script>
<style>
.cera-filter-box {
  width: 278px;
  background-color: #fff;
  padding: 6px 12px 11px;
  border-radius: 3px;
}

.cera-filter-title {
  font-weight: 700;
  line-height: 48px;
  height: 43px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cera-filter-label {
  margin-left: 12px;
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.cera-filter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  transition: background-color 0.3s;
}

.cera-filter-item:hover {
  background-color: #fafafa;
}

.cera-filter-input {
  display: flex;
  position: relative;
  align-items: center;
}

.cera-filter-count {
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.cera-filter-clear {
  color: #0076a8;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
}

.cera-filter-input input{
  position: relative;
  z-index: 49;
  background-color: white;
  width: 15px;
  height: 15px;
  border-radius: 1px;
  outline: 0;
  border: 1px solid #757575;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  color: inherit;
}

.cera-filter-input input:checked {
  background-color: #0076a8;
  text-align: center;
  background-clip: padding-box;
}

.cera-filter-tick {
  position: absolute;
  left: 2.5px;
  z-index: 50;
}
</style>
