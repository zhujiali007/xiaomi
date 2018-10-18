/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : mi

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-10-18 11:13:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mi_goods
-- ----------------------------
DROP TABLE IF EXISTS `mi_goods`;
CREATE TABLE `mi_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(255) NOT NULL,
  `goodsType` varchar(255) NOT NULL,
  `goodsPrice` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mi_goods
-- ----------------------------
INSERT INTO `mi_goods` VALUES ('2', '小米8E', '6GB+64GB全网通', '1899');
INSERT INTO `mi_goods` VALUES ('3', '小米8E', '6GB+128GB全网通', '2199');
INSERT INTO `mi_goods` VALUES ('1', '小米8E', '4GB+64GB全网通', '1699');

-- ----------------------------
-- Table structure for mi_user
-- ----------------------------
DROP TABLE IF EXISTS `mi_user`;
CREATE TABLE `mi_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mi_user
-- ----------------------------
INSERT INTO `mi_user` VALUES ('1', 'xixi', '123', '这是测试');
INSERT INTO `mi_user` VALUES ('2', 'xixi', '123', '这是测试');
INSERT INTO `mi_user` VALUES ('3', 'tguj', 'buybi', null);
INSERT INTO `mi_user` VALUES ('4', 'giukh', 'gi7uk', null);
INSERT INTO `mi_user` VALUES ('5', '', '', null);
INSERT INTO `mi_user` VALUES ('6', '猪猪猪', '1234', null);
INSERT INTO `mi_user` VALUES ('7', 'zhujiali', '123', null);
