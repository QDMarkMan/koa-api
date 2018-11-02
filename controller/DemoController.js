/**
 * 获取列表数据controller示例
 */
exports.getList = async function (req, res) {
  //获取请求参数
 const openId = req.session.userinfo.openId;
  // logger.info(`handler getList, user openId is ${openId}`);

  try {
      // 拿到列表数据
      const startTime = new Date().getTime();
      let res = await ListService.getListFromDB(openId)
      // logger.info(`handler getList, ListService.getListFromDB cost time ${new Date().getTime() - startDate}`);
      // 对数据处理，返回给前端
      // ...
  } catch(error) {
      // logger.error(`handler getList is error, ${JSON.stringify(error)}`);
  }
}