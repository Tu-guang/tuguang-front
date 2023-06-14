<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="返回"
      @back="() => $router.back()"
    />
    <a-card :bordered="false" :bodyStyle="{ padding: '24px', height: '100%' }" :style="{ height: '100%' }">
      <a-descriptions :title="records.name" v-if="records.id!==undefined" :column="1">
        <a-descriptions-item label="请求头">{{ records.requestHeader }}</a-descriptions-item>
        <a-descriptions-item label="响应头">{{ records.responeHeader }}</a-descriptions-item>
        <a-descriptions-item label="参数">{{ records.params }}</a-descriptions-item>
        <a-descriptions-item label="请求方法">{{ records.method }}</a-descriptions-item>
        <a-descriptions-item label="状态">{{ records.status }}</a-descriptions-item>
        <a-descriptions-item label="更新时间">{{ records.updateTime }}</a-descriptions-item>
      </a-descriptions>
      <template>
        <a-empty v-if="records.id===undefined" />
      </template>
    </a-card>
    <a-divider></a-divider>
    <a-card :bordered="false" :bodyStyle="{ padding: '24px', height: '100%' }" :style="{ height: '100%' }">
      <a-space :size="10 " direction="vertical">
        <div style="font-size: 20px;">在线测试</div>
        <a-divider></a-divider>
        <a-form :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="输入参数">
            <a-textarea
              v-decorator="['userRequestParams'] "
              :rows="6"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
              调用
            </a-button>
          </a-form-item>
        </a-form>

        <a-divider></a-divider>
      </a-space>
    </a-card>
    <a-card
      title="返回结果"
      :bordered="false"
      :bodyStyle="{ padding: '24px', height: '100%' }"
      :style="{ height: '100%' }">
      <div>{{ invoke }}</div>
    </a-card>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import { getInterfaceInfoById, invokeInterfaceInfo } from '@/api/Interface'

export default defineComponent({
  data () {
    return {
      records: [],
      invoke: '',
      id: '',
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    getInterfaceInfoById({ id: this.$route.params.id }).then((res) => {
      this.records = res.data
    })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
        this.form.validateFields((err, values) => {
        if (!err) {
          if (!this.$route.params.id) {
            this.$message.error('接口不存在')
            return
          }
          console.log('Received values of form: ', values)
          invokeInterfaceInfo({ id: this.$route.params.id, ...values }).then((res) => {
            // console.log(res)
            this.invoke = res
          })
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
})
</script>

<style lang='less' scoped>

</style>
