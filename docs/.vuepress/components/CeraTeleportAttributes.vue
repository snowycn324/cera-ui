<template>
  <el-table :data="tableData" style="margin-top: 20px;" stripe>
    <el-table-column
      prop="name"
      label="Name"
      width="100">
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
    name: "CeraTeleportAttributes",
    data() {
      return {
        tableData: [
          {
            name: 'to',
            required: "true",
            type: "String",
            default: "-",
            remark: "The target of teleport. Will be applied to document.querySelector."
          },
          {
            name: "disabled",
            required: "optional",
            type: "Boolean",
            default: "false",
            remark: "Will teleport to target when set disabled to false, and will keep it in original place when set disabled to true."
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>