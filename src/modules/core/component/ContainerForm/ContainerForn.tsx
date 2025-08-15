const ContainerForm: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center min-h-screen  p-4 font-sans">
      <div className="max-w-4xl w-200 mx-auto bg-third rounded-xl shadow-lg border-4 border-primary overflow-hidden p-10">
        {children}
      </div>
    </div>
  );
};
export default ContainerForm