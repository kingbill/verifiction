module.exports = {
  // 是否为空
  isNull: function (data) {
    if (!data.length) {
      return true
    } else {
      return false
    }
  },
  // 是否为邮箱
  isEmail: function (data) {
    if (data.length != 0) {
      let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (!reg.test(data)) {
        return false  
      }else{
        return true
      }
    }
  },
  // 是否为手机号
  isPhone: function (data) {
    if (data.length != 0) {
      let reg = /^1[34578]\d{9}$/;
      if (!reg.test(data)) {
        return false
      } else {
        return true
      }
    }
  },
  // 是否为中文字符
  isChinese: function(data){
    if(data.length != 0){
      let reg = [\u4e00-\u9fa5];
      if(!reg.test(data)){
        return false
      }{
        return true 
      }
    }
  }
  // 表单是否完整
  required: function(data){
    for(let key in data){
      if(!data[key]){
        return false
      }
    }
    return true
  }
}