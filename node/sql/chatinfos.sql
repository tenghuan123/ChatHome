/*
Navicat MySQL Data Transfer

Source Server         : tenghuan
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : nodechat

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2020-06-18 07:12:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `chatinfos`
-- ----------------------------
DROP TABLE IF EXISTS `chatinfos`;
CREATE TABLE `chatinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `chat_time` bigint(13) DEFAULT NULL,
  `chat_msg` varchar(255) DEFAULT NULL,
  `info_type` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chatinfos
-- ----------------------------
INSERT INTO `chatinfos` VALUES ('1', '1', '2', '1531045313395', '你说说你再干嘛啊', '0');
INSERT INTO `chatinfos` VALUES ('2', '2', '1', '1531045313395', '我在看书啊', '0');
INSERT INTO `chatinfos` VALUES ('3', '1', '2', '1531045313395', '你再看什么书啊，能给我推荐几本不', '0');
INSERT INTO `chatinfos` VALUES ('4', '3', '1', '1531045313395', '滕环有空吗', '0');
INSERT INTO `chatinfos` VALUES ('5', '1', '3', '1531045313395', '现在有空，你有什么事', '0');
INSERT INTO `chatinfos` VALUES ('46', '1', '3', '1592380481207', '我想找他玩', '0');
INSERT INTO `chatinfos` VALUES ('47', '2', '1', '1592382936866', '111', '0');
INSERT INTO `chatinfos` VALUES ('48', '2', '1', '1592382965847', '312312', '0');
INSERT INTO `chatinfos` VALUES ('49', '2', '1', '1592383010549', '我觉得都还好啊', '0');
INSERT INTO `chatinfos` VALUES ('50', '3', '1', '1592386727338', '恩', '0');
INSERT INTO `chatinfos` VALUES ('51', '3', '1', '1592400163242', '好啊，我也要去', '0');
INSERT INTO `chatinfos` VALUES ('52', '2', '1', '1592400172380', '1111', '0');
INSERT INTO `chatinfos` VALUES ('53', '2', '1', '1592400297205', '1111', '0');
INSERT INTO `chatinfos` VALUES ('54', '2', '1', '1592400470961', '额', '0');
INSERT INTO `chatinfos` VALUES ('55', '1', '2', '1592400620337', '2312', '0');
INSERT INTO `chatinfos` VALUES ('56', '1', '2', '1592400774400', '111', '0');
INSERT INTO `chatinfos` VALUES ('57', '1', '3', '1592400918439', '恩', '0');
