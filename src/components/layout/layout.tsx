import React from 'react';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-white p-4 lg:px-16 flex flex-col gap-4 text-gray-800">
      {children}
    </div>
  );
};
