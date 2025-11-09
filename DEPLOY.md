# Hướng dẫn Deploy lên Vercel

## Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Push code lên GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy trên Vercel**
   - Truy cập [https://vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub
   - Click "New Project"
   - Import repository từ GitHub
   - Vercel sẽ tự động detect Next.js
   - Click "Deploy"

3. **Xong!** Website sẽ được deploy tự động

## Cách 2: Deploy qua Vercel CLI

1. **Cài đặt Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow các bước hướng dẫn**
   - Login vào Vercel
   - Chọn project settings
   - Deploy

## Cách 3: Deploy qua GitHub Actions (Tự động)

Tạo file `.github/workflows/vercel.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Lưu ý

- Vercel hỗ trợ Next.js out of the box
- Không cần cấu hình thêm
- Tự động build và deploy khi push code
- Hỗ trợ preview deployments cho mỗi PR
