<template>
  <a-modal
    title="新建接口"
    :width="640"
    :visible="visible"
    :confirmLoading="loading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
        <a-form-item v-show="model && model.id > 0" label="主键ID">
          <a-input v-decorator="['id', { initialValue: 0 }]" disabled />
        </a-form-item>
        <a-form-item label="名称">
          <a-input v-decorator="['name', {rules: [{required: true, min: 2, message: '请输入至少两个字符的名称！'}]}]" />
        </a-form-item>
        <a-form-item label="描述">
          <a-input
            v-decorator="['description', {rules: [{required: true, min: 5, message: '请输入至少五个字符的规则描述！'}]}]" />
        </a-form-item>
        <a-form-item label="链接">
          <a-input v-decorator="['url', {rules: [{required: true, max: 100, message: '链接太长了！'}]}]" />
        </a-form-item>
        <a-form-item label="请求头">
          <a-textarea
            v-decorator="['requestHeader', {rules: [{required: false, max: 200, message: '太长了！'}]}]"
            :rows="4" />
        </a-form-item>
        <a-form-item label="响应头">
          <a-textarea
            v-decorator="['responeHeader', {rules: [{required: false, max: 200, message: '太长了！'}]}]"
            :rows="4" />
        </a-form-item>
        <a-form-item label="请求参数">
          <a-textarea v-decorator="['params', {rules: [{required: false, max: 200, message: '太长了！'}]}]" :rows="4" />
        </a-form-item>
        <a-form-item label="请求方法">
          <a-input v-decorator="['method', {rules: [{required: false, max: 30, message: '太长了！'}]}]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

// 表单字段
const fields = ['description', 'id', 'name', 'url', 'requestHeader', 'responeHeader', 'params', 'method']

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    return {
      form: this.$form.createForm(this)
    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  }
}
</script>
