import mongoose from 'mongoose'

mongoose.connect(`mongodb://${process.env.MONGO_HOST}`, {
  dbName: process.env.MONGO_DB,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
}).then(() => {
  console.log('连接成功')
}).catch((e) => {
  console.log('连接失败', e)
})

const recordSchema = new mongoose.Schema({ user: String, ip: String, message: String, response: String }, { timestamps: true })
const recordModel = mongoose.model('record', recordSchema)

export {
  recordModel,
}
