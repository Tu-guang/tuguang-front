<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '24px', height: '100%' }" :style="{ height: '100%' }" title="查看接口文档">
    <div class="interface-index-main">
      <a-table
        :columns="columns"
        rowKey="id"
        :data-source="dataList"
        size="default"
        :loading="loading"
        :pagination="pagination"
        @change="handleTableChange"
        showPagination="auto"
      >
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleView(record)">查看</a>
          </template>
        </span>
      </a-table>
    </div>
  </a-card>
</template>

<script>

import { defineComponent } from 'vue'
import { interfacelistPage } from '@/api/Interface'

const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '接口名称',
    dataIndex: 'name'
  },
  {
    title: '描述',
    dataIndex: 'description'
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default defineComponent({
  data () {
    return {
      loading: false,
      dataList: [],
      pagination: {},
      columns,
      queryParam: {
        'current': 1,
        'pageSize': 10
      }
    }
  },
  mounted () {
    this.loading = true
    this.InitData()
  },
  methods: {
    InitData () {
      this.loading = true
      interfacelistPage(this.queryParam)
        .then(res => {
          if (res.code === 0) {
            setTimeout(() => {
              const pagination = { ...this.pagination }
              // Read total count from server
              // pagination.total = data.totalCount;
              pagination.total = res.data.total
              this.pagination.current = res.data.current
              this.loading = false
              this.dataList = res.data.records
              this.pagination = pagination
            }, 500)
          } else {
            setTimeout(() => {
              this.$message.error(res.message)
              this.loading = false
            }, 500)
          }
        })
    },
    handleTableChange (pagination, filters, sorter) {
      // console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.queryParam = pagination
      this.InitData()
    },
    handleView (records) {
      console.log(records)
      // this.$store.commit('view', records)
      this.$router.push({
        path: '/dashboard/interfaceShow/' + records.id
      })
    }
  }
})
</script>

<style lang='less' scoped>
.interface-index-main {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

</style>
