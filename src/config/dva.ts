/*
 * @Description: dva
 * @Author: 高锐
 * @Date: 2020-12-12 17:09:49
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-12 18:24:30
 */
import {create} from 'dva-core-ts'
import models from '@/models/index'
import createLoading from 'dva-loading-ts'

// 创建实例
const app = create()

// 加载model对象
models.forEach(model => {
  app.model(model)
})

const Loading = createLoading()

app.use(Loading)

// 启动dva
app.start()

// 导出dva数据
export default app._store
