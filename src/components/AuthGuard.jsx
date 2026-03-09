export default function AuthGuard({ children }) {
  // 开发模式：直接返回子组件，跳过登录
  return children;
}
