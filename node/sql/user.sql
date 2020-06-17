/*
Navicat MySQL Data Transfer

Source Server         : tenghuan
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : nodechat

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2020-06-18 07:12:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `count` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '小胡', 'admin', 'xiaoya', '/static/touxiang1.jpg');
INSERT INTO `user` VALUES ('2', '环', 'tenghuan', 'aaaaa', '/static/touxiang2.jpg');
INSERT INTO `user` VALUES ('3', '欣叶', 'xinye', 'aaa', '/static/touxiang3.jpg');
