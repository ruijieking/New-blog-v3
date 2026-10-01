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

  // 导航栏（href + 显示文字，数组顺序即显示顺序）
  nav: [
    { href: '/talk', label: '今日说法' },
    { href: '/blog', label: '文章' },
    { href: '/archive', label: '归档' },
    { href: '/photo', label: '照片' },
    { href: '/about', label: '关于我' },
  ],
};
