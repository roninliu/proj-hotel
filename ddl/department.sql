/*
Navicat MySQL Data Transfer

Source Server         : MysqlLocalhost
Source Server Version : 50622
Source Host           : localhost:3306
Source Database       : proj_hotel

Target Server Type    : MYSQL
Target Server Version : 50622
File Encoding         : 65001

Date: 2015-03-23 20:37:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '人力', '1');
INSERT INTO `department` VALUES ('2', '行政', '2');
INSERT INTO `department` VALUES ('3', '销售', '3');
