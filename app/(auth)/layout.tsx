const AuthLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="flex items-center bg-my-gradient justify-center h-full ">{children}</div>
  );
}
export default AuthLayout;
