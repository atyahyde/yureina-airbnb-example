import getCurrentUser from "@airbnb/actions/getCurrentUser";

import EmptyState from "@airbnb/components/elements/EmptyState";
import FavoritesClient from "./FavoritesClient";
import getFavoriteListings from "@airbnb/actions/getFavoriteListings";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorites on your properties"
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
