<template>
  <el-table :data="tableData" style="margin-top: 20px;" stripe>
    <el-table-column
      prop="name"
      label="Name"
      width="130">
    </el-table-column>
    <el-table-column
      prop="required"
      label="Required"
      width="100">
    </el-table-column>
    <el-table-column
      prop="type"
      label="Type"
      width="100">
    </el-table-column>
    <el-table-column
      prop="default"
      label="Default Value"
      width="115">
    </el-table-column>
    <el-table-column
      prop="remark"
      label="Remark">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "CeraModalAttributes",
    data() {
      return {
        tableData: [
          {
            name: 'value / v-model',
            required: "true",
            type: "Boolean",
            default: "-",
            remark: "To show/hide the loading component."
          },
          {
            name: "label",
            required: "optional",
            type: "String",
            default: "-",
            remark: "The label in loading component."
          },
          {
            name: "label-class",
            required: "optional",
            type: "String",
            default: "-",
            remark: "Class name for label."
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>