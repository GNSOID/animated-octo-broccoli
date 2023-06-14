import Mock from 'mockjs'

const data = Mock.mock({
    "number|10000-99999": 100
  })

Mock.mock('/getUserSms', 'get', () => {
    return data
})