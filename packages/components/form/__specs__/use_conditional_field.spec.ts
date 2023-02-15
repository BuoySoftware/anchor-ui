import { renderHook } from "@testing-library/react";
import { useConditionalField } from "../src/use_conditional_field";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useWatch: jest.fn(),
}));

import HookForm from "react-hook-form";

describe("useConditionalField", () => {
  context("watching a single value", () => {
    context("watched value matches", () => {
      it("returns true", () => {
        jest.spyOn(HookForm, "useWatch").mockReturnValue(["yes"]);
        const { result } = renderHook(() =>
          useConditionalField({
            watch: "fieldA",
            value: "yes",
          })
        );

        expect(result.current.active).toBe(true);
      });
    });

    context("watched value does not match", () => {
      it("returns false", () => {
        jest.spyOn(HookForm, "useWatch").mockReturnValue(["no"]);
        const { result } = renderHook(() =>
          useConditionalField({
            watch: "fieldA",
            value: "yes",
          })
        );

        expect(result.current.active).toBe(false);
      });
    });
  });

  context("watching multiple fields", () => {
    context("all fields match the expected value", () => {
      it("returns true", () => {
        jest.spyOn(HookForm, "useWatch").mockReturnValue(["yes", "yes"]);
        const { result } = renderHook(() =>
          useConditionalField({
            watch: ["fieldA", "fieldB"],
            value: "yes",
          })
        );

        expect(result.current.active).toBe(true);
      });
    });

    context("one of the fields match the expected value", () => {
      it("returns true", () => {
        jest.spyOn(HookForm, "useWatch").mockReturnValue(["yes", "no"]);
        const { result } = renderHook(() =>
          useConditionalField({
            watch: ["fieldA", "fieldB"],
            value: "yes",
          })
        );

        expect(result.current.active).toBe(true);
      });
    });

    context("none of the fields match the expected value", () => {
      it("returns false", () => {
        jest.spyOn(HookForm, "useWatch").mockReturnValue(["no", "no"]);
        const { result } = renderHook(() =>
          useConditionalField({
            watch: ["fieldA", "fieldB"],
            value: "yes",
          })
        );

        expect(result.current.active).toBe(false);
      });
    });
  });
});
