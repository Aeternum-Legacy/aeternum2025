"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const placeholders = [
  "What's new at Aeternum?",
  "How are we improving legacy sharing?",
  "Latest product updates from our team",
  "What's changing in our platform?",
  "What’s the story behind Aeternum?",
];

type NewsInputWrapperProps = {
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export default function NewsInputWrapper({
  onChange,
  onSubmit,
}: NewsInputWrapperProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    if (input) {
      onChange(input.value);
      onSubmit();
    }
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
