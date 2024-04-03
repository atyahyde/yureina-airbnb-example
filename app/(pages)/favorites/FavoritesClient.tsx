"use client";

import Heading from "@airbnb/components/elements/Heading";
import ListingCard from "@airbnb/components/fragments/listings/ListingCard";
import Container from "@airbnb/components/layouts/Container";
import { SafeListing, SafeUser } from "@airbnb/types";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}
const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
