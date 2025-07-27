# frontendのコード作成手順

```
npm create vite@latest frontend
```

でfrontendディレクトリを作る

```
cd frontend
npm install
```

frontend/src/App.jsxを書き換える

## テストコードを追加
```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest
npm audit fix
npm install --save-dev jest-environment-jsdom
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/jest-dom
```

# 直接コードを起動

## backend

```
python .\backend\app.py
```

## frontend
```
cd frontend
npm run dev
```

# docker-composeで起動
```
docker-compose up -d --build
```
