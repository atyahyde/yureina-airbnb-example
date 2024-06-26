import getCurrentUser from "@airbnb/actions/getCurrentUser";
import EmptyState from "@/app/components/elements/EmptyState";
import getListingById from "@airbnb/actions/getListingById";
import ListingClient from "./ListingClient";
import getReservations from "@airbnb/actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
};

export default ListingPage;
