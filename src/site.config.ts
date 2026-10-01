// ── 全局站点配置 ──
// fork 后只需改这个文件，整个站点自动更新

export const site = {
  // 网站名称（导航栏 logo、页脚、页面标题后缀、SEO）
  name: '我的博客',

  // 默认页面标题（未指定 title 时的后备值）
  defaultTitle: '我的博客',

  // SEO 站点描述（meta description）
  description: '写代码、拍照片、记录生活。',

  // ── SEO：分享与链接 ──
  url: 'https://ruijieking.github.io/',            // 站点域名（必须带 https://，SEO/canonical/sitemap 依赖它）
  ogImage: '/og.png',                           // 社交分享预览图（public/og.png，建议 1200×630）
  ogSiteName: '我的博客',                      // 分享卡片上显示的站点名

  // 作者信息
  author: {
    name: '你的名字',
    github: 'ruijieking',
    // 关于页头像：填 public/ 下的路径（如 '/avatar.png'）或完整图片 URL
    // 留空则自动使用 GitHub 头像 https://github.com/<github>.png
    avatar: 'https://github.com/ruijieking.png',
  },

  // 关于页面的介绍文字
  about: '这是我的个人博客，用 Astro 构建。写代码、拍照片、记录生活。',

  // ── 首页左侧「公告栏」──
  // 一行一条，按数组顺序显示；留空数组则不显示公告栏
  notices: [
    '欢迎来到我的博客 👋',
    '这里记录 Linux、终端配置、Neovim 和摄影相关的内容。',
  ],

  // ── 首页右侧「记录栏」的最后更新时间数据源 ──
  // 填 '用户名/仓库名'（如 'ruijieking/New-blog-v3'）→ 构建时读取该仓库最后一次提交时间
  // 留空 或 读取失败 → 自动降级用本地 git 提交时间
  // 再取不到 → 降级用最新一篇文章的发布日期
  statsRepo: 'ruijieking/New-blog-v3',

  // ── 社交链接（显示在「关于我」页头像卡片右侧，自左向右排列）──
  // icon 可选：github / bilibili / mail / telegram / twitter / rss
  //          填其它值会显示通用链接图标
  // href 支持 https:// 链接或 mailto: 邮箱
  // 不想显示某一项，直接把那一行删掉即可
  socials: [
    { label: 'GitHub',   href: 'https://github.com/ruijieking',      icon: 'github' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/你的UID',  icon: 'bilibili' },
    { label: 'QQ 邮箱',  href: 'mailto:你的QQ号@qq.com',              icon: 'mail' },
  ],

  // ── 友情链接 ──
  // 每个字段含义：
  //   name        站点名称（必填）
  //   url         站点地址（必填，带 https://）
  //   description 一句话简介（可选）
  //   avatar      头像图片地址（可选，留空则用站点名首字自动生成圆形占位）
  // 数组留空 → 友链页会显示「还没有友链」的占位文案
  friends: [
    {
      name: 'Astro',
      url: 'https://astro.build',
      description: '本站使用的静态站点框架，内容优先、默认零 JS。',
      avatar: 'https://astro.build/favicon.svg',
    },
    {
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com',
      description: '工具类优先的 CSS 框架，本站样式全部由它驱动。',
      avatar: 'https://tailwindcss.com/favicons/favicon-32x32.png',
    },
    {
      name: 'Vite',
      url: 'https://vite.dev',
      description: '极速的前端构建工具，Astro 的底层构建引擎。',
      avatar: 'https://vite.dev/logo.svg',
    },
  ],

  // 友链页「申请友链」卡片的说明文字（留空则用默认文案）
  friendApplyNote:
    '欢迎交换友链～ 请先在你的站点加上本站链接，然后通过下面的任一方式把「名称 / 链接 / 头像 / 简介」发给我。',

  // 导航栏（href + 显示文字，数组顺序即显示顺序）
  nav: [
    { href: '/talk', label: '今日说法' },
    { href: '/blog', label: '文章' },
    { href: '/archive', label: '归档' },
    { href: '/photo', label: '照片' },
    { href: '/friends', label: '友链' },
    { href: '/about', label: '关于我' },
  ],
};
