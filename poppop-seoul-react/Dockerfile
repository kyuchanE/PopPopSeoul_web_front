# 1) Build stage
FROM node:24-alpine AS build
WORKDIR /app
# 의존성 설치 (캐시효율)
COPY package*.json ./
RUN npm ci
# 소스 복사 후 빌드
COPY . .
RUN npm run build

# 2) Runtime stage
FROM nginx:1.27-alpine AS runtime
# SPA 라우팅을 위한 Nginx 설정
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 빌드 산출물 복사
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
