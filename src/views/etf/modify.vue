<template>
    <div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>

export default {
  name: 'modify',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  }
}
</script>