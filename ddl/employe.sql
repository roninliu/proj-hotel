/*
Navicat MySQL Data Transfer

Source Server         : MysqlLocalhost
Source Server Version : 50622
Source Host           : localhost:3306
Source Database       : proj_hotel

Target Server Type    : MYSQL
Target Server Version : 50622
File Encoding         : 65001

Date: 2015-03-23 20:37:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for employe
-- ----------------------------
DROP TABLE IF EXISTS `employe`;
CREATE TABLE `employe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employe_id` int(11) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `enable` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employe
-- ----------------------------
INSERT INTO `employe` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员2222', '1', '1');
INSERT INTO `employe` VALUES ('2', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员222', '3', '0');
INSERT INTO `employe` VALUES ('3', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('4', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员222', '2', '1');
INSERT INTO `employe` VALUES ('5', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('6', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('7', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('8', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理2222', '2', '1');
INSERT INTO `employe` VALUES ('9', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('10', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('11', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('12', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('13', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('14', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('15', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('16', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('17', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('18', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('19', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('20', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('21', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('22', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('23', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('24', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('25', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('26', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('27', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('28', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('29', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('30', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('31', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('32', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('33', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('34', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('35', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('36', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('37', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('38', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('39', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('40', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('41', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('42', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('43', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('44', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('45', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('46', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('47', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('48', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('49', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('50', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('51', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('52', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('53', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('54', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('55', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('56', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('57', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('58', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('59', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('60', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('61', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('62', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('63', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('64', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('65', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('66', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('67', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
INSERT INTO `employe` VALUES ('68', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@localhost.com', '1000', '管理员', '2', '1');
