'use strict';
import {
  //   mgYzrom,
  openYzrom
} from './domainName';

import Request from './request';
// 获取基本数据
const getBaseInfo = async (param) => {
  let res = await Request('GET', param, openYzrom + '/api.php/index/index/getnid');
  return res;
};
module.exports = {
  getBaseInfo
};
