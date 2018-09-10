/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : project_progress

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-09-10 16:31:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blms_replacement
-- ----------------------------
DROP TABLE IF EXISTS `replacement`;
CREATE TABLE `replacement` (
  `id` varchar(32) NOT NULL COMMENT '主键ID',
  `enterprise_id` varchar(32) DEFAULT NULL COMMENT '企业ID',
  `replace_reasons_id` varchar(32) DEFAULT NULL COMMENT '补发原因（配置服务的ID）',
  `replace_note` varchar(255) DEFAULT NULL COMMENT '补发说明',
  `prove_path` varchar(255) DEFAULT NULL COMMENT '相关证明 (附件路径)',
  `audit_time` datetime DEFAULT NULL COMMENT '申请时间',
  `replace_status` varchar(100) DEFAULT NULL COMMENT '状态',
  `flow_inst_id` varchar(32) DEFAULT NULL COMMENT '当前流程实例的ID',
  `audit_group_id` varchar(32) DEFAULT NULL COMMENT '申请单位ID',
  `is_accepted` char(1) DEFAULT NULL COMMENT '是否受理 0-没有，1-受理',
  `accepted_time` datetime DEFAULT NULL COMMENT '受理时间',
  `acceptor` varchar(32) DEFAULT NULL COMMENT '受理人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `del_flag` char(1) DEFAULT NULL COMMENT '逻辑删除 0-正常，1-删除  : 0-正常，1-删除 ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='补发申请';

-- ----------------------------
-- Records of blms_replacement
-- ----------------------------