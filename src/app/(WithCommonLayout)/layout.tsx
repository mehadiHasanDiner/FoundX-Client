import { Navbar } from "@/src/components/ui/navbar";

const WithCommonLayoutGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default WithCommonLayoutGroup;
