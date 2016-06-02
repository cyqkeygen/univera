FROM daocloud.io/node:5

# 缓存依赖结果
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry registry.npm.taobao.org && npm install

# 还原工作目录
WORKDIR /app/q.cform.io
COPY . /app/q.cform.io/
RUN cp -a /tmp/node_modules /app/q.cform.io/
RUN npm run build

# 运行环境设定
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE $PORT

# 设置启动命令
CMD ["/usr/local/bin/node", "output"]
