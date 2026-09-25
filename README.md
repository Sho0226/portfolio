# Portfolio

Sho Katsumata のポートフォリオサイト。Vite + React + TypeScript + Tailwind CSS によるモノクロデザインの1ページ構成。

## Sections

- About
- Timeline
- Works
- Blog
- Contact

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

Vitest を Node実行系とBrowser Mode系（Playwright / Chromium）に責務分離しています。

```bash
npm run test:unit    # src/lib配下の純粋関数をNode環境でテスト
npm run test:browser # コンポーネントの実ブラウザ操作テスト（Playwright Chromium）
npm run test         # unit + browser をまとめて実行
npm run test:watch   # watchモード
npm run test:vrt     # ビジュアルリグレッションテスト（要Docker）
```

- `*.unit.test.ts`: DOM非依存のロジック（フィルタ処理など）をNode環境で検証
- `*.browser.test.tsx`: タブ切り替えやモーダル表示など、実際のユーザー操作をChromium上で検証
- `*.vrt.test.tsx`: 見た目そのものをスクリーンショット比較で検証
- アクセシビリティチェック: `axe-core` + `vitest-axe`（`toHaveNoViolations` matcher）で、初期表示・タブ切り替え後・モーダル表示中・ダークモードの各状態にa11y違反がないことを検証
- `src/test/browser-setup.ts` で `index.css` を読み込んでいます。これを外すとスタイル無しのDOMを検査することになり、axeのコントラスト検査が実質無効になります
- GitHub Actions（`.github/workflows/test.yml`）で push / PR ごとにビルドとテスト一式を実行し、a11y違反を含むテスト失敗でCIを落とす

### Visual Regression Test

スクリーンショットはレンダラが変わると一致しないため、VRTは常に固定したPlaywrightコンテナ内で実行します。ローカルもCIも同じイメージを使うので、基準画像はLinux版のみを管理します。

```bash
npm run test:vrt        # 比較実行
npm run test:vrt -- -u  # 意図した見た目の変更を基準画像に反映
```

- 基準画像: `src/components/__screenshots__/<test file>/<name>-chromium-linux.png`（コミット対象）
- イメージのタグは `scripts/vrt-docker.sh` と `.github/workflows/test.yml`、`playwright` の devDependency を揃えて更新すること
- 差分が出たCIでは `vrt-diffs` アーティファクトに差分画像が上がります

## Deploy (Cloudflare Workers)

Cloudflare Workers の静的アセット配信でホスティング（`wrangler.jsonc`）。

- URL: https://portfolio.sho-hono-app.workers.dev
- main への push で GitHub Actions がテスト（a11y含む）成功後に自動デプロイ
- 手動デプロイ: `npm run build && npx wrangler deploy`
- 必要な GitHub Secrets: `CLOUDFLARE_API_TOKEN`（Workers Scripts: Edit 権限）, `CLOUDFLARE_ACCOUNT_ID`
