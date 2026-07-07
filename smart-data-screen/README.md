# RuyiBigScreen 如意数据大屏

一个纯前端、教学型、开源友好的数据可视化大屏项目，帮助学生和初学者从 0 到 1 学习 Vue 3 + ECharts 数据大屏开发。

## 技术栈

- Vue 3 + Vite + TypeScript
- ECharts
- Pinia
- Axios
- MSW / mock 数据源预留
- Vitest
- Playwright
- ESLint / Prettier / Stylelint

## 数据源切换

默认使用 mock 数据：

```env
VITE_DATA_SOURCE=mock
```

后续切换真实 API：

```env
VITE_DATA_SOURCE=api
VITE_API_BASE_URL=/api
```

页面组件只通过 services 层获取数据，不直接读取 mock 文件。

## 常用命令

```bash
npm run dev
npm run lint
npm run test
npm run test:e2e
npm run build
```
