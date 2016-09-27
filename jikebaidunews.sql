-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-09-25 15:41:13
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jikebaidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `baijia`
--

CREATE TABLE `baijia` (
  `id` int(200) NOT NULL,
  `titile` varchar(100) NOT NULL,
  `property` enum('热点','网易要闻','新浪要闻','搜狐要闻','') DEFAULT NULL,
  `pictureLink` varchar(200) NOT NULL,
  `releaseTime` datetime NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baijia`
--

INSERT INTO `baijia` (`id`, `titile`, `property`, `pictureLink`, `releaseTime`, `content`) VALUES
(1, '"三星Note7全球召回中国例外是持双重标准吗？', '网易要闻', 'http://img1.imgtn.bdimg.com/it/u=4271742787,3307570756&fm=21&gp=0.jpg', '2016-09-07 17:06:00', '目前三星因电池缺陷问题，将在全球召回已出售的250万部Note7智能手机，引发了业界的巨大关注，该事件的讨论在持续发酵。在事故发生之前，三星迎来了反击苹果最好的时刻。今年第一、第二季度，全球智能手机出货量三星仍居首位。第二季度出货量为7700万部，高于排在第二位的苹果和第三位的华为的出货量总和。而三星旗舰机Galaxy S7同样销量不俗，三星股价创下纪录高点，三星市值也接近2400亿美元的新高峰。在智能机增长停滞与iPhone6s增长乏力的时间点，这个成绩实属难得。'),
(2, '为什么女人学历越高越难找对象', '网易要闻', 'http://s3.sinaimg.cn/mw690/002yDqnyzy6VlvdNnuqe2&690', '2016-09-10 12:17:13', '小染是一个非常聪明的女生，自幼品学兼优，各种考试都是游刃有余、得心应手。她一路读书读到了博士后，于是问题来了，她发现自己找对象越来越难了。随着年龄的增长，她的家人也开始催婚了。跟她同龄的女生早就结婚生子，只剩下她还单身一人。'),
(3, '揭秘：一线城市的房价居高不下的四大原因', '', 'http://zb.loupan.com/upfile/image/20160817/20160817154755_4206985.jpg', '2016-09-07 17:06:00', '天下熙熙皆为利来,天下攘攘皆为利往。在21世纪的前十几年，如果你能够在世纪初在各大城市做房产生意，那么毫无疑问，你踏上了一列始向财富巅峰的高速列车。全国各大城市房价稳步上涨，局部地区真正意义上的寸土寸金情况出现。近日上海传出了一个新政策遭到疯狂传播，以至于很多上海市民投资楼市，一度出现了假离婚的热潮，这简直不可思议，为了买房赚钱，不惜假离婚，只为政策优惠而已，假离婚买房真的好吗？还有没有社会道德呢？这一切都证明了什么呢？哪里有高回报资金就跟风涌入哪里。'),
(4, '与Wevr合作，钢铁侠导演推出VR电影', '', 'http://img1.imgtn.bdimg.com/it/u=401114434,2112022389&fm=21&gp=0.jpg', '2016-09-07 17:06:00', '早在今年4月，拍摄了《钢铁侠》、《奇幻森林》等电影的好莱坞著名导演Jon Favreau表示将拍摄个人首部VR电影，几个月后，他正式宣布这部电影将先后在HTC Vive、Oculus Rift、PlayStation VR上发布。'),
(5, '撕开道义的羊皮，德云社商业帝国势力难挡！', '新浪要闻', 'http://img5.imgtn.bdimg.com/it/u=2753674907,989299464&fm=11&gp=0.jpg', '2016-09-07 17:06:00', '这就是如今的郭德纲，霸气侧漏！当我们不经意间打开手机，发现没有一点点防备，也没有一丝顾虑，郭德纲和曹云金的师徒撕逼战又开始了，但很显然，这一次来得要更猛一些！到底孰是孰非，外界定无判断。今天小编要做的就是为大家送一份豪华版「饭后谈资」——大话郭曹撕逼战。');

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE `local` (
  `id` int(200) NOT NULL,
  `titile` varchar(100) NOT NULL,
  `property` enum('热点','网易要闻','新浪要闻','搜狐要闻','') DEFAULT NULL,
  `pictureLink` varchar(200) NOT NULL,
  `releaseTime` datetime NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`id`, `titile`, `property`, `pictureLink`, `releaseTime`, `content`) VALUES
(1, '"马云“复仇”：肯德基变“马德基”？', '网易要闻', 'http://cms-\r\n\r\nbucket.nosdn.127.net/catchpic/4/49/49300107e23a26422329fd77fd83afd0.jpg?imageView&thumbnail=550x0', '2016-09-07 17:06:00', '中国老话说“君子报仇十年不晚”。三十年报仇也\r\n\r\n不晚。当年马云去肯德基应聘，25个人结果录取了24个人，只有一个人没有录取，这个人就是马云。\r\n三十年后，马云趁着肯德基在中国分拆业务的机会，投资了肯德基，于是大家开玩笑就说当年肯德基对马云爱答不理，如今马云对肯德基爱理就理。搞不好以后在中国肯德基会变成“马德基\r\n\r\n”。'),
(2, '日本一工厂工作人员疑似被卷粉碎机 发现身体肉屑', '', 'http://cms-bucket.nosdn.127.net/catchpic/5/54/542585CF95CA09655ED55B56C6F3CFB6.jpg?\r\n\r\nimageView&thumbnail=550x0', '2016-09-07 17:06:00', '5日凌晨4时30分左右，在位于奈良市南庄町的一家名为“I.T.O”的资源回收公司的工厂内，一名45岁的男性操作员下落不明。据当\r\n\r\n地警方介绍，该男子曾在连接粉碎机的传送带附近作业。后来人们在粉碎的木料中发现了疑似为该男子曾佩戴过的安全帽碎片及一些身体肉屑。'),
(3, '没有马云的支付宝之前，银行是多么\r\n\r\n牛逼呀现在怕了', '', 'http://img.mp.itc.cn/upload/20160906/4b1ecff521844c37a6af1ece3de0d1dd_th.jpg', '2016-09-07 17:06:00', '众所周知，在淘宝网和支付宝初步诞生的2004年\r\n\r\n期间\r\n　　马云曾经希望和四大银行等传统银行，共同打造移动支付平台。\r\n　　不过，或许是当时的支付宝太过弱小，根本不能让四大银行瞧上眼，\r\n　　马云的善意请求，惨遭拒绝。'),
(4, '百度美团外卖合并？那么外卖领域的大战才真正开始', '', 'http://7xil86.com2.z0.glb.qiniucdn.com/uploads/images/2016/09/3fc9a027db0ae35921c5bbc8aaa2a31d_1473231157.jpeg', '2016-09-07 17:06:00', '9月5日晚，百度糯米和百度外卖打\r\n\r\n包出售给新美大的传言再起，网友爆料交易已接近尾声。6日早上，百度糯米和百度外卖官方分别辟谣否认，而新美大则暂无回应。但媒体报道称，百度正在与美团谈判，出售两项业务之事，\r\n\r\n已可确认为事实。'),
(5, '新房二手房市场持续高烧 传言加磅商住类成交占七成', '新浪要闻', 'http://src.leju.com/imp/imp/deal/45/4a/f/4071ba362f23a9d629752d18acd_p24_mk24.jpg', '2016-09-07 17:06:00', '随着楼市传统旺季“金九银十”的到来，北京房地产市场也迎来每\r\n\r\n年最受瞩目的两个月。截至目前，已有多家房地产中介机构公布了“金九”首周北京新房、二手房成交数据，根据统计，北京新房成交量在连续四周徘徊在2000套/周的状态之后，上周迅速猛\r\n\r\n增至3185套(不含保障房与自住房);无独有偶，上周全市二手房共网签6604套，创造近18周新高。值得注意的是，在新房成交中，商住类产品共实现成交2165套，占据全部成交的比重高达68%\r\n\r\n，业内表示，这与此前业界传言北京将对该类项目进行调控密切相关，在此背景下，预计9月整体成交量将持续回升。'),
(6, '北京气象台发雷电黄色预警 局地6级大风和冰雹', '网易要闻', 'http://himg2.huanqiu.com/attachment2010/2016/0907/20160907065308186.jpg', '2016-09-08 02:16:14', '据北京市气象局官方微博消息，北京市气象台7月27日19时6分发布雷电黄色预警信号，北京市大部分地区出现雷阵雨天气，短时雨强较大，局地伴有6级以上短时大风和冰雹，请注意防范。');

-- --------------------------------------------------------

--
-- 表的结构 `recomend`
--

CREATE TABLE `recomend` (
  `id` int(200) NOT NULL,
  `titile` varchar(100) NOT NULL,
  `property` enum('热点','网易要闻','新浪要闻','搜狐要闻','') DEFAULT NULL,
  `pictureLink` varchar(200) NOT NULL,
  `releaseTime` datetime NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `recomend`
--

INSERT INTO `recomend` (`id`, `titile`, `property`, `pictureLink`, `releaseTime`, `content`) VALUES
(1, '马云又多了一个新"头衔"', '热点', 'http://img4.imgtn.bdimg.com/it/u=4234511868,720638546&fm=206&gp=0.jpg', '2016-09-10 11:47:34', '/ ''鲁迪安塔拉当时称，为了推动印度尼西亚电子商务的发展，政府设立一个由10位部长组成的“指导委员会”。该委员会已邀请马云出任顾问。鲁迪安塔拉说：“邀请马云的目的是，让印度尼西亚在全球电子商务领域占据更重要的地位。”<script>alert("4")</script>'),
(2, '余额宝用户破3亿：蚂蚁聚宝1.3秒增加一个用户', '热点', 'http://www.pc6.com/up/2015-12/201512211416330420.png', '2016-09-25 10:05:51', '2015年8月,我爱支付宝'),
(3, '河南发现特大金矿 含金量近105吨可挖80年', '网易要闻', 'http://www.topnews9.com/uploads/allimg/130830/5-130S0152541.jpg', '2016-09-25 12:05:16', '央广网桐柏9月25日消息（河南台记者杨芬）据中国之声《央广新闻》报道，河南省国土资源厅在河南省桐柏山区域内的桐柏县老湾金矿深部及外围普查项目中，发现特大金矿，含金量近105吨可挖80年。'),
(4, '90后逐梦“互联网” 引来百万“天使投资', '网易要闻', 'http://img0.imgtn.bdimg.com/it/u=1501873865,157317709&fm=11&gp=0.jpg', '2016-09-25 18:50:00', '黄佳佳是一位90后，温州苍南人，她做的这款智能外语口语学习App叫“外教君”。 黄佳佳说，下载、打开App注册之后，用户就可以按照自己的需求及自身口语水平选择不同的入口，有留学（课程）专区、青少年英语（精品课）等专区可供选择。申请发出去后，约几十秒钟时间，就有大洋彼岸的外教会与你接通对话。'),
(5, '招行分行推 “有房就贷”产品 专家：似美国次贷危机', '热点', 'http://img4.imgtn.bdimg.com/it/u=1379984668,937212324&fm=21&gp=0.jpg', '2016-09-25 18:58:00', '所谓的“房抵贷”，是指借款人以自己或关系人的房产做抵押，向银行申请一次性或循环使用的消费或者是经营用途的人民币贷款。只不过，有些银行只接受结清按揭贷款的房产，有些银行可以接受未结清贷款的房产，这就是所谓的“二押”，银行普遍只接受在本行首次抵押的房产进行“二次抵押”新增贷款。有些银行只接受有房产证的现房，也有银行可接受本行合作按揭项目的期房做抵押，但贷款额度在房产证下来前会有限制。');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baijia`
--
ALTER TABLE `baijia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recomend`
--
ALTER TABLE `recomend`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
