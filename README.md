# codexskin.top

给 Codex 换一张脸，但别把信任交给一张图。

**codexskin.top** 是 Codex App 换肤一站式资源站，提供免费 Codex 皮肤浏览、在线皮肤工作台、宠物库、Dream Skin 安装指南与皮肤定制服务。

## 功能页面

| 页面 | 说明 |
|------|------|
| `/` 首页 | Hero 预览 + 精选皮肤 + 三层能力 + 安全边界 + 定价 |
| `/skins` 皮肤库 | 可筛选皮肤网格，标注授权状态与平台支持 |
| `/studio` 工作台 | 在线调参预览 Home/Task/Diff，导出 .dreamskin |
| `/pets` 宠物库 | 宠物展示 + Pet Lab sprite 校验 + 安装链接生成 |
| `/install` 安装恢复 | 三大场景安装指南 + Win/Mac 差异 + 恢复方案 |
| `/safety` 安全说明 | 信任边界 + 隐私承诺 + 能做/不能做/恢复卡片 |
| `/custom` 定制服务 | 三档定价（免费/¥199/¥999）+ 定制流程 |

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: 系统字体（中文优先）

## 设计原则

- 深色工作台风格，配色：`#0E0F12` 背景 / `#33D6A6` 强调色
- 皮肤包仅含图片和色彩数据，不含任何可执行代码
- 图片在浏览器本地处理，不上传服务器
- 全站使用 `codexskin.top` 域名

## 本地运行

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建
```

## Cloudflare Workers 部署

本站是纯静态 Next.js 站点，`next.config.ts` 使用 `output: "export"`，生产构建会输出到 `out/`。

Cloudflare Workers 的部署配置在 `wrangler.toml`：

```bash
npm run build
npm run deploy
```

Workers 构建设置建议：

- Root directory: `codexskin-top`
- Build command: `npm ci && npm run build`
- Deploy command: `npx wrangler deploy`
- Assets directory: `out`
- Node version: `22.21.1`

## 安全声明

codexskin.top 是独立社区站点，与 OpenAI / Codex 官方无关。所有皮肤资源均为纯数据文件，不包含脚本、命令或可执行代码。

## 许可

MIT License
