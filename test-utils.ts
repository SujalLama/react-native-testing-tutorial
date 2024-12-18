import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

// Define request handlers and response resolvers for random user API.
// By default, we always return the happy path response.
const handlers = [
  http.get("https://fakestoreapi.com/*", () => {
    return HttpResponse.json(DATA);
  }),
];

export const server = setupServer(...handlers);

export const mockServerFailureForGetAllProducts = () => {
  server.use(
    http.get("https://fakestoreapi.com/", ({ request }) => {
      // Construct a URL instance out of the intercepted request.
      const url = new URL(request.url);
      // Read the "results" URL query parameter using the "URLSearchParams" API.
      const resultsLength = url.searchParams.get("results");
      // Simulate a server error for the get all contacts request.
      // We check if the "results" query parameter is set to "25"
      // to know it's the correct request to mock, in our case get all contacts.
      if (resultsLength === "25") {
        return new HttpResponse(null, { status: 500 });
      }

      return HttpResponse.json(DATA);
    }),
  );
};

export const DATA: { results: { id: string; title?: string }[] } = {
  results: [
    {
      id: "123",
      title: "Ram",
    },
    {
      id: "123n",
      title: "Hari",
    },
    {
      id: "123a",
      title: "Time",
    },
    {
      id: "123m",
      title: "sd",
    },
    {
      id: "123o",
      title: "ni",
    },
    {
      id: "1s23a",
      title: "Find",
    },
  ],
};
