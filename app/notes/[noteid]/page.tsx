// SSR
import { getSingleNote } from "@/app/lib/api";

import DetailsPageClient from "../DetailsPage.client/DetailsPage.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface Props {
  params: Promise<{ noteid: string }>;
}

const details = async ({ params }: Props) => {
  const { noteid } = await params;
  // const note = await getSingleNote(noteid);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", noteid],
    queryFn: () => getSingleNote(noteid),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailsPageClient />
    </HydrationBoundary>
  );
};

export default details;
