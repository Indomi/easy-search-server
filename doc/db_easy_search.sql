/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50610
 Source Host           : localhost:3306
 Source Schema         : db_easy_search

 Target Server Type    : MySQL
 Target Server Version : 50610
 File Encoding         : 65001

 Date: 26/01/2019 11:21:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_image
-- ----------------------------
DROP TABLE IF EXISTS `t_image`;
CREATE TABLE `t_image`  (
  `id` int(11) NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image_size` double NULL DEFAULT NULL,
  `image_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
