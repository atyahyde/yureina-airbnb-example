import EmptyState from "@airbnb/components/elements/EmptyState";
import getCurrentUser from "@airbnb/actions/getCurrentUser";
import getReservations from "@airbnb/actions/getReservations";
import ReservationClient from "./ReservationClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties"
      />
    );
  }

  return (
    <ReservationClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
