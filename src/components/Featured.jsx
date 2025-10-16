import { Spinner } from "./ui/spinner";
import { Timer } from "lucide-react";
import { Card, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Featured({ data, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner className="w-12 h-12 text-red-500" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-20">No activities found.</p>
    );
  }

  return (
    <section
      id="home"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
    >
      {data.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 pt-0"
        >
          {item.pictures.length > 0 ? (
            <Carousel>
              <CarouselContent>
                {item.pictures.map((picture, i) => (
                  <CarouselItem key={i}>
                    <div className="relative h-48 w-full">
                      <img
                        src={picture}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
                <CarouselPrevious />
                <CarouselNext />
              </CarouselContent>
            </Carousel>
          ) : (
            <img
              className="relative h-48 w-full"
              src="https://dummyimage.com/900x900/fff/000.png&text=No+Image+Found"
              alt="No Image Found"
            />
          )}
          <CardContent className="p-0">
            <div className="p-4">
              <CardTitle className="text-2xl font-semibold">
                {item.name}
              </CardTitle>
              {item.description ? (
                <div
                  className="text-gray-600 mt-2 overflow-hidden line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              ) : (
                "No description available."
              )}
            </div>
          </CardContent>
          <CardContent className="flex flex-col items-center justify-center mb-6">
            <h3 className="text-gray-500 mb-4 flex gap-2 justify-center items-center">
              <p className="text-sm">From</p>
              <p className="text-2xl font-bold text-gray-900">
                {item.price.amount} {item.price.currencyCode}
              </p>
            </h3>
            <p className="mb-4 flex items-center gap-1 text-gray-900">
              <Timer size={15} />
              Duration: {item.minimumDuration}
            </p>
            <a
              href={item.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-slate-600" variant="default">
                Check Availability
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
