"use client";

import { getSingleNote } from "@/app/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const DetailsPageClient = () => {
  const { noteid } = useParams<{ noteid: string }>();

  const { data } = useQuery({
    queryKey: ["note", noteid],
    queryFn: () => getSingleNote(noteid),
    refetchOnMount: false,
  });

  return (
    <div>
      <h1>Data client page</h1>
      {data && (
        <>
          <p>{data.title}</p>
          <p>title:{data.title}</p>
          <p>content:{data.content}</p>
          <p>createdAt:{data.createdAt}</p>
        </>
      )}
    </div>
  );
};

export default DetailsPageClient;
