import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

describe("Site pages", () => {
  it("serves the Book Appointment page at /book-appointment", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/book-appointment").at(-1)?.routeId).toBe("/book-appointment");
  });
});
